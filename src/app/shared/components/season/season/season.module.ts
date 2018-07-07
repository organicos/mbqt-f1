import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonComponent } from './season.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  declarations: [SeasonComponent],
  exports: [SeasonComponent]
})
export class SeasonModule { }
