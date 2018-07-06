import { Component, AfterViewInit, Input } from '@angular/core';
import { ErgastService } from '@services/ergast/ergast.service';

@Component({
  selector: 'app-season-races',
  templateUrl: './season-races.component.html',
  styleUrls: ['./season-races.component.css']
})
export class SeasonRacesComponent implements AfterViewInit {

  races;

  driverWon: any = {};

  @Input() year;

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

  private _driver;

  constructor(
    private ergast: ErgastService
  ) { }

  ngAfterViewInit() {
    this.loadSeasons();
  }

  private loadSeasons() {
    this.ergast.racesByYear(this.year)
    .then(races => {
      this.races = races;
    });
  }

  private loadDriverWins() {
    this.ergast.winsByYear(this.year, this.driver)
    .then((driverWins: any) => {

      const races = driverWins.MRData.RaceTable.Races;

      races.forEach(race => {
        this.driverWon[race.round] = true;
      });

    });
  }
}
