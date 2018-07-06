import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonRacesComponent } from './season-races.component';
import { SeasonRaceModule } from '@app/shared/components/season/season-race/season-race.module';

@NgModule({
  imports: [
    CommonModule,
    SeasonRaceModule
  ],
  declarations: [SeasonRacesComponent],
  exports: [SeasonRacesComponent]
})
export class SeasonRacesModule { }
