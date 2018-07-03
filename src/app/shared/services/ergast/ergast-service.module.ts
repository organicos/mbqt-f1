import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErgastService } from './ergast.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ErgastService,
  ]
})
export class ErgastServiceModule { }
