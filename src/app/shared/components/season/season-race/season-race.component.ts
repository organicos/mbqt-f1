import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-season-race',
  templateUrl: './season-race.component.html',
  styleUrls: ['./season-race.component.css']
})
export class SeasonRaceComponent implements OnInit {

  @Input() race;

  @Input() highlight;

  constructor() { }

  ngOnInit() {
  }

}
