import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErgastServiceModule } from '@services/ergast/ergast-service.module';

@NgModule({
  imports: [
    CommonModule,
    ErgastServiceModule
  ],
  exports: [
    ErgastServiceModule
  ]
})
export class CoreModule { }
