import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenService } from '@app/shared/services/splash-screen/splash-screen.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SplashScreenService,
  ],
})
export class SplashScreenModule { }
