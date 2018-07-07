import { Component } from '@angular/core';
import { SplashScreenService } from '@app/shared/services/splash-screen/splash-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private splachScreen: SplashScreenService
  ) {}

}
