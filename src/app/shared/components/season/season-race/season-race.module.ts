import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonRaceComponent } from './season-race.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [SeasonRaceComponent],
  exports: [SeasonRaceComponent]
})
export class SeasonRaceModule { }
