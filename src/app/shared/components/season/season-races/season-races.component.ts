import { Component, Input } from '@angular/core';
import { ErgastService } from '@services/ergast/ergast.service';

@Component({
  selector: 'app-season-races',
  templateUrl: './season-races.component.html',
  styleUrls: ['./season-races.component.scss']
})
export class SeasonRacesComponent {

  driverWon: any = {};

  loading: boolean;

  races;

  racesWins;

  @Input()
  set driver(v: string) {
    this._driver = v;
    if (v) {
      this.loadDriverWins();
    }
  }

  get driver() {
    return this._driver;
  }

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

  private _driver;

  private _year;

  constructor(
    private ergast: ErgastService
  ) { }

  private loadSeasons() {
    this.loading = true;
    this.ergast.racesByYear(this.year)
    .then(races => {
      this.loading = false;
      this.races = races;
    });
  }

  private loadDriverWins() {
    this.driverWon = {};
    this.ergast.winsByYear(this.year).then(this.extratVictoryInfo);
  }

  private extratVictoryInfo = (driversWins) => {
    this.racesWins = driversWins.MRData.RaceTable.Races;

    this.racesWins.forEach((race, index) => {
      const driver = race.Results[0].Driver;
      this.races.MRData.RaceTable.Races[index].winner = driver;
      if (driver.driverId === this.driver) {
        this.driverWon[race.round] = true;
      }
    });
  }
}
