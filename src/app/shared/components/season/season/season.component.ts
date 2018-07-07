import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { ErgastService } from '@services/ergast/ergast.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements AfterViewInit {

  champion;
  manufaturer;
  season;

  @Input() year;

  @Input() highlight;

  @Output() championReceived = new EventEmitter<any>();

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

  private loadDriverImage() {
    const championName = `${this.champion.givenName}_${this.champion.familyName}`;
    this.ergast.getImage(championName)
    .then(championImage => {
      this.champion.image = championImage;
    });
  }

  private extractChampion() {
    try {
      this.champion = this.season.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;
      this.championReceived.emit(this.champion);
      this.loadDriverImage();
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
