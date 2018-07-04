import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonRacesComponent } from './season-races.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeasonRacesComponent],
  exports: [SeasonRacesComponent]
})
export class SeasonRacesModule { }
