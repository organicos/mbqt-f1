import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SeasonsComponent } from './seasons.component';
import { SeasonModule } from '@components/season/season/season.module';
import { SeasonRacesModule } from '@app/shared/components/season/season-races/season-races.module';

@NgModule({
  imports: [
    CommonModule,
    SeasonModule,
    SeasonRacesModule,
    FlexLayoutModule,
  ],
  declarations: [
    SeasonsComponent
  ],
  exports: [
    SeasonsComponent
  ]
})
export class SeasonsModule { }
