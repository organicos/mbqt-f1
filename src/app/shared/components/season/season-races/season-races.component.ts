import { Component, Input } from '@angular/core';
import { ErgastService } from '@services/ergast/ergast.service';

@Component({
  selector: 'app-season-races',
  templateUrl: './season-races.component.html',
  styleUrls: ['./season-races.component.scss']
})
export class SeasonRacesComponent {

  races;

  driverWon: any = {};

  @Input()
  set year(v: string) {
    this._year = v;
    if (v) {
      this.loadSeasons();
    }
  }

  get year() {
    return this._year;
  }

  @Input()
  set driver(v: string) {
    console.log('set champion', v);
    this._driver = v;
    if (v) {
      this.loadDriverWins();
    }
  }

  get driver() {
    return this._driver;
  }

  private _driver;

  private _year;

  constructor(
    private ergast: ErgastService
  ) { }

  private loadSeasons() {
    this.ergast.racesByYear(this.year)
    .then(races => {
      this.races = races;
    });
  }

  private loadDriverWins() {
    this.driverWon = {};
    this.ergast.winsByYear(this.year, this.driver)

    .then((driverWins: any) => {
      const races = driverWins.MRData.RaceTable.Races;

      races.forEach(race => {
        this.driverWon[race.round] = true;
      });
    });
  }
}
