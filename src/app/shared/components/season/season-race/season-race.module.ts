import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonRaceComponent } from './season-race.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeasonRaceComponent],
  exports: [SeasonRaceComponent]
})
export class SeasonRaceModule { }
