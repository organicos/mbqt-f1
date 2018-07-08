import { Component, OnInit } from '@angular/core';
import { ErgastService } from '@app/shared/services/ergast/ergast.service';

@Component({
  selector: 'app-champions-page',
  templateUrl: './champions-page.component.html',
  styleUrls: ['./champions-page.component.scss']
})
export class ChampionsPageComponent implements OnInit {

  loading$;

  constructor(
    private ergast: ErgastService
  ) { }

  ngOnInit() {
    this.loading$ = this.ergast.loading$;
  }

}
