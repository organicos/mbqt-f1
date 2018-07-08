import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionsPageRoutingModule } from './champions-page-routing.module';
import { ChampionsPageComponent } from './champions-page.component';
import { SeasonsModule } from '@app/shared/components/season/seasons/seasons.module';
import { MatProgressBarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ChampionsPageRoutingModule,
    MatProgressBarModule,
    SeasonsModule,
  ],
  declarations: [ChampionsPageComponent]
})
export class ChampionsPageModule { }
