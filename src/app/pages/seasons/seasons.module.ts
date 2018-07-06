import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SeasonsRoutingModule } from './seasons-routing.module';
import { SeasonsComponent } from './seasons.component';
import { SeasonModule } from '@components/season/season/season.module';
import { SeasonRacesModule } from '@app/shared/components/season/season-races/season-races.module';

@NgModule({
  imports: [
    CommonModule,
    SeasonsRoutingModule,
    SeasonModule,
    SeasonRacesModule,
    FlexLayoutModule,
  ],
  declarations: [SeasonsComponent]
})
export class SeasonsModule { }
