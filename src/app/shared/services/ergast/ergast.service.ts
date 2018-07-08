import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError, OperatorFunction, BehaviorSubject } from 'rxjs';

const enum API {
  NAME = 'MBQT_F1_DATA_CACHE',
  CHAMPION_BY_YEAR_API = 'https://ergast.com/api/f1/${year}/last/driverStandings/1.json',
  RACES_BY_YEAR_API = 'https://ergast.com/api/f1/${year}/races.json',
  WINS_BY_YEAR_AND_DRIVER_API = 'https://ergast.com/api/f1/${year}/drivers/${driver}/results/1.json',
  IMAGE_API = 'https://en.wikipedia.org/w/api.php?action=query&titles=${driverName}&prop=pageimages&format=json&origin=*&pithumbsize=64',
}

@Injectable({
  providedIn: 'root'
})
export class ErgastService {

  loading$ = new BehaviorSubject(false);

  private innerLoading: any = {};

  private innerCache = {
    driverPictures: {},
    races: {},
    seasonChampion: {},
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

  getImage(driverName) {
    const endpoint = API.IMAGE_API.replace('${driverName}', driverName);
    return this.callOrCache(endpoint, 'driverPictures', `${driverName}`, map((res: any) => {
      const firstImageNumber = Object.keys(res.query.pages)[0];
      return res.query.pages[firstImageNumber].thumbnail.source;
    }));
  }

  private callOrCache(endpoint, collectionName, id, ...pipes: any[]) {

    return new Promise((resolve, reject) => {
      if (this.innerCache[collectionName][id]) {
        resolve(this.innerCache[collectionName][id]);
      } else {
        this.innerLoading[id] = true;
        this.http.get(endpoint)
        .pipe(this.handleError(), ...pipes)
        .toPromise()
        .then(res => {
          this.stopLoadingAngEmitState(collectionName, id);
          this.innerCache[collectionName][id] = res;
          resolve(this.innerCache[collectionName][id]);
          this.setCacheOnStorage();
        }, err => {
          this.stopLoadingAngEmitState(collectionName, id);
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

  private stopLoadingAngEmitState(collectionName, id) {
    this.innerLoading[collectionName] = this.innerLoading[collectionName] || {};
    this.innerLoading[collectionName][id] = false;

    const state = Object.keys(this.innerLoading).reduce((previousCollectionValue, collection) => {
      return Object.keys(this.innerLoading[collection]).reduce((previsousItemValue, key) => {
        return collection[key] || previsousItemValue;
      }, false) || previousCollectionValue;
    }, false);

    this.loading$.next(state);
  }

}
