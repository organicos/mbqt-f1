import { Component, AfterViewInit, Input } from '@angular/core';
import { ErgastService } from '@services/ergast/ergast.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements AfterViewInit {

  champion;
  circuit;
  season;

  @Input() year;

  constructor(
    private ergast: ErgastService
  ) { }

  ngAfterViewInit() {
    this.loadSeasons();
  }

  private loadSeasons() {
    this.ergast.season(this.year)
    .toPromise()
    .then(season => {
      this.season = season;
      this.extractChampion();
      this.extractCircuit();
    });
  }

  private extractChampion() {
    try {
      this.champion = this.season.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;
    } catch (error) {
      return undefined;
    }
  }

  private extractCircuit() {
    try {
      this.circuit = this.season.MRData.RaceTable.Races[0].Circuit;
    } catch (error) {
      return undefined;
    }
  }
}
