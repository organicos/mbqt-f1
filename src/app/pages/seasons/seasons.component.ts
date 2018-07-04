import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {

  years = Array.from({ length: 11 }, (v, k) => k + 2005);

  constructor() { }

  ngOnInit() {
  }

}
