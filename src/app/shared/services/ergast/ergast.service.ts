import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const CHAMPION_BY_YEAR_API = 'https://ergast.com/api/f1/${year}/last/driverStandings/1.json';

const RACES_BY_YEAR_API = 'https://ergast.com/api/f1/${year}/races.json';

const WINS_BY_YEAR_AND_DRIVER_API = 'http://ergast.com/api/f1/${year}/drivers/${driver}/results/1.json';

export interface LocalCache {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class ErgastService {

  private localCache: LocalCache = {
    seasonChampion: {},
    races: {},
    wins: {},
  };

  constructor(
    private http: HttpClient
  ) {}

  seasonChampion(year: string) {
    const endpoint = CHAMPION_BY_YEAR_API.replace('${year}', year);
    return this.callOrCache(endpoint, 'seasonChampion', year);
  }

  racesByYear(year: string) {
    const endpoint = RACES_BY_YEAR_API.replace('${year}', year);
    return this.callOrCache(endpoint, 'races', year);
  }

  winsByYear(year: string, driver: string) {
    const endpoint = WINS_BY_YEAR_AND_DRIVER_API.replace('${year}', year).replace('${driver}', driver);
    return this.callOrCache(endpoint, 'wins', `${year}-${driver}`);
  }

  private callOrCache(endpoint, type, id) {
    return new Promise((resolve, reject) => {
      if (this.localCache[type][id]) {
        resolve(this.localCache[type][id]);
      } else {
        this.http.get(endpoint)
        .pipe(this.handleError())
        .toPromise()
        .then(res => {
          this.localCache[type][id] = res;
          resolve(this.localCache[type][id]);
        }, err => {
          reject(err);
        });
      }
    });
  }

  private handleError = () => {
    return catchError(err => {
      console.log('->>>>> ErgastService Error:: Need to handle error in calls', err);
      return throwError('->>>>> ErgastService Error:: Need to handle error in calls');
    });
  }

}
