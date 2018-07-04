import { Component, AfterViewInit, Input } from '@angular/core';
import { ErgastService } from '@services/ergast/ergast.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements AfterViewInit {

  champion;
  manufaturer;
  season;

  @Input() year;

  constructor(
    private ergast: ErgastService
  ) { }

  ngAfterViewInit() {
    this.loadSeason();
  }

  private loadSeason() {
    this.ergast.seasonChampion(this.year)
    .then(season => {
      this.season = season;
      this.extractChampion();
      this.extractConstructor();
    });
  }

  private extractChampion() {
    try {
      this.champion = this.season.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;
    } catch (error) {
      return undefined;
    }
  }

  private extractConstructor() {
    try {
      this.manufaturer = this.season.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0];
    } catch (error) {
      return undefined;
    }
  }
}
