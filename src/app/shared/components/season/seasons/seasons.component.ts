import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { ErgastService } from '@app/shared/services/ergast/ergast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {

  champions = {};

  loading$: Observable<boolean>;

  showRaces: {[key: number]: boolean} = [];

  years = Array.from({ length: 11 }, (v, k) => k + 2005);

  yearOpen;

  raceYear;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ergest: ErgastService,
  ) {  }

  ngOnInit() {
    this.loading$ = this.ergest.loading$;
    this.getYearFromUrl();
  }

  showYearDetails(year) {
    console.log('showYearDetails(year)', year);
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
