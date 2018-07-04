import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

const CHAMPION_BY_YEAR_API = 'http://ergast.com/api/f1/${year}/last/driverStandings/1.json';

@Injectable({
  providedIn: 'root'
})
export class ErgastService {

  constructor(
    private http: HttpClient
  ) {}

  season(year) {

    const endpoint = CHAMPION_BY_YEAR_API.replace('${year}', year);

    return this.http.get(endpoint)
    .pipe(
      catchError(err => {
        console.log('->>>>> ErgastService Error:: Need to handle error in calls', err);
        return throwError('->>>>> ErgastService Error:: Need to handle error in calls');
      })
    );

  }

}
