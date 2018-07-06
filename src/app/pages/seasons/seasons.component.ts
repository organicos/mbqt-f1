import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {

  years = Array.from({ length: 11 }, (v, k) => k + 2005);

  showRaces: {[key: number]: boolean} = [];

  champions = {};

  yearOpen;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getYearFromUrl();
  }

  showYearDetails(year) {
    console.log('showYearDetails(year)', year);
  }

  setOpenYear(year) {
    this.yearOpen = year;
    this.router.navigate(['/seasons', year]);
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
    })
  }

}
