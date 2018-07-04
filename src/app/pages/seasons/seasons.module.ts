import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonsRoutingModule } from './seasons-routing.module';
import { SeasonsComponent } from './seasons.component';
import { SeasonModule } from '@components/season/season/season.module';

@NgModule({
  imports: [
    CommonModule,
    SeasonsRoutingModule,
    SeasonModule,
  ],
  declarations: [SeasonsComponent]
})
export class SeasonsModule { }
