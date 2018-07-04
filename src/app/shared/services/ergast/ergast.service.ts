import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const CHAMPION_BY_YEAR_API = 'https://ergast.com/api/f1/${year}/last/driverStandings/1.json';

const RACES_BY_YEAR_API = 'https://ergast.com/api/f1/${year}/races.json';

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
  };

  constructor(
    private http: HttpClient
  ) {}

  seasonChampion(year) {
    return new Promise((resolve, reject) => {
      if (this.localCache.seasonChampion[year]) {
        resolve(this.localCache.seasonChampion[year]);
      } else {
        const endpoint = CHAMPION_BY_YEAR_API.replace('${year}', year);
        this.http.get(endpoint)
        .pipe(this.handleError())
        .toPromise()
        .then(res => {
          this.localCache.seasonChampion[year] = res;
          resolve(this.localCache.seasonChampion[year]);
        }, err => {
          reject(err);
        });
      }
    });
  }

  races(year) {
    return new Promise((resolve, reject) => {
      if (this.localCache.races[year]) {
        resolve(this.localCache.races[year]);
      } else {
        const endpoint = RACES_BY_YEAR_API.replace('${year}', year);
        this.http.get(endpoint)
        .pipe(this.handleError())
        .toPromise()
        .then(res => {
          this.localCache.races[year] = res;
          resolve(this.localCache.races[year]);
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
