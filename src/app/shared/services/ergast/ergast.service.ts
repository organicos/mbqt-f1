import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const CHAMPION_BY_YEAR_API = 'https://ergast.com/api/f1/${year}/last/driverStandings/1.json';

const RACES_BY_YEAR_API = 'https://ergast.com/api/f1/${year}/races.json';

@Injectable({
  providedIn: 'root'
})
export class ErgastService {

  constructor(
    private http: HttpClient
  ) {}

  season(year) {
    const endpoint = CHAMPION_BY_YEAR_API.replace('${year}', year);
    return this.http.get(endpoint).pipe(this.handleError());
  }

  races(year) {
    const endpoint = RACES_BY_YEAR_API.replace('${year}', year);
    return this.http.get(endpoint).pipe(this.handleError());
  }

  private handleError = () => {
    return catchError(err => {
      console.log('->>>>> ErgastService Error:: Need to handle error in calls', err);
      return throwError('->>>>> ErgastService Error:: Need to handle error in calls');
    });
  }

}
