import { Component, AfterViewInit, Input } from '@angular/core';
import { ErgastService } from '@services/ergast/ergast.service';

@Component({
  selector: 'app-season-races',
  templateUrl: './season-races.component.html',
  styleUrls: ['./season-races.component.css']
})
export class SeasonRacesComponent implements AfterViewInit {

  races;

  @Input() year;

  constructor(
    private ergast: ErgastService
  ) { }

  ngAfterViewInit() {
    this.loadSeasons();
  }

  private loadSeasons() {
    this.ergast.races(this.year)
    .then(races => {
      this.races = races;
    });
  }


}
