import { Injectable } from '@angular/core';

const SEASONS_ENDPOINT = 'http://ergast.com/api/f1/seasons';

const SEASON_ENDPOINT = 'http://ergast.com/api/f1';

const SEASON_REVIEW_ENDPOINT = 'http://en.wikipedia.org/wiki/1950_Formula_One_season';

const GRAN_PRIX_REVIEW_ENDPOINT = 'http://en.wikipedia.org/wiki/1950_British_Grand_Prix';

const years = Array.from({ length: 11 }, (v, k) => k + 2005);

@Injectable({
  providedIn: 'root'
})
export class ErgastService {

  constructor() {}

  season(year) {

    const endpoint = `SEASON_ENDPOINT/${year}`;

  }

}
