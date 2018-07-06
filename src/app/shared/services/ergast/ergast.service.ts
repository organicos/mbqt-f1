import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const enum API {
  NAME = 'MBQT_F1_DATA_CACHE',
  CHAMPION_BY_YEAR_API = 'https://ergast.com/api/f1/${year}/last/driverStandings/1.json',
  RACES_BY_YEAR_API = 'https://ergast.com/api/f1/${year}/races.json',
  WINS_BY_YEAR_AND_DRIVER_API = 'https://ergast.com/api/f1/${year}/drivers/${driver}/results/1.json',
}

interface LocalCache {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class ErgastService {

  private innerCache: LocalCache = {
    seasonChampion: {},
    races: {},
    wins: {},
  };

  constructor(
    private http: HttpClient
  ) {
    this.loadCacheFromStorage();
  }

  seasonChampion(year: string) {
    const endpoint = API.CHAMPION_BY_YEAR_API.replace('${year}', year);
    return this.callOrCache(endpoint, 'seasonChampion', year);
  }

  racesByYear(year: string) {
    const endpoint = API.RACES_BY_YEAR_API.replace('${year}', year);
    return this.callOrCache(endpoint, 'races', year);
  }

  winsByYear(year: string, driver: string) {
    const endpoint = API.WINS_BY_YEAR_AND_DRIVER_API.replace('${year}', year).replace('${driver}', driver);
    return this.callOrCache(endpoint, 'wins', `${year}-${driver}`);
  }

  private callOrCache(endpoint, type, id) {
    return new Promise((resolve, reject) => {
      if (this.innerCache[type][id]) {
        resolve(this.innerCache[type][id]);
      } else {
        this.http.get(endpoint)
        .pipe(this.handleError())
        .toPromise()
        .then(res => {
          this.innerCache[type][id] = res;
          resolve(this.innerCache[type][id]);
          this.setCacheOnStorage();
        }, err => {
          reject(err);
        });
      }
    });
  }

  private handleError = () => {
    return catchError(err => {
      return throwError('ErgastService Error:: Need to handle error in calls');
    });
  }

  private loadCacheFromStorage() {
    const localStorageCache = localStorage.getItem(API.NAME);

    if (!!localStorageCache) {
      this.innerCache = JSON.parse(localStorageCache);
    }
  }

  private setCacheOnStorage() {
    const data = JSON.stringify(this.innerCache);
    localStorage.setItem(API.NAME, data);
  }

}
