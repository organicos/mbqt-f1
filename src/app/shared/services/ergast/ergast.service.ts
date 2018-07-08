import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, distinctUntilChanged } from 'rxjs/operators';
import { throwError, OperatorFunction, BehaviorSubject, Observable, of } from 'rxjs';

export const enum API {
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

  loading$: Observable<boolean>;

  private _loading$ = new BehaviorSubject(false);

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
    this.subscribeToLoadingSream();
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
    this.setLoading(collectionName, id, true);
    return new Promise((resolve, reject) => {
      if (this.innerCache[collectionName][id]) {
        this.stopLoadingAngEmitState(collectionName, id);
        resolve(this.innerCache[collectionName][id]);
      } else {
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
      console.error('ErgastService Error:: ', err);
      return of();
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

  private setLoading(collectionName, id, value) {
    this.innerLoading[collectionName] = this.innerLoading[collectionName] || {};
    this.innerLoading[collectionName][id] = value;
  }

  private stopLoadingAngEmitState(collectionName, id) {
    this.setLoading(collectionName, id, false);
    this.emitState();
  }

  private emitState() {
    const state = Object.keys(this.innerLoading).reduce((previousCollectionValue, collectionName) => {
      const collection = this.innerLoading[collectionName];
      return Object.keys(collection).reduce((previsousItemValue, itemName) => {
        const item = collection[itemName];
        return item || previsousItemValue;
      }, false) || previousCollectionValue;
    }, false);
    this._loading$.next(state);
  }

  private subscribeToLoadingSream() {
    this.loading$ = this._loading$
    .pipe(
      distinctUntilChanged()
    );
  }
}
