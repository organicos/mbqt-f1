import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {

  champions = {};

  showRaces: {[key: number]: boolean} = [];

  years = Array.from({ length: 11 }, (v, k) => k + 2005);

  yearOpen;

  raceYear;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {  }

  ngOnInit() {
    this.getYearFromUrl();
  }

  setOpenYear(year) {
    this.router.navigate(['/champions', year]);
  }

  private getYearFromUrl() {
    this.route.params.subscribe(params => {
      try {
        const yearParam = params['year'];
        const yearIsWithinRange = this.years.find(year => `${year}` === `${yearParam}`);
        if (yearIsWithinRange) {
          this.yearOpen = yearParam;
        }
      } catch (error) { }
    });
  }

}
