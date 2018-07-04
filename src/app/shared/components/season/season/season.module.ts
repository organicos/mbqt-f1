import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonComponent } from './season.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SeasonComponent],
  exports: [SeasonComponent]
})
export class SeasonModule { }
