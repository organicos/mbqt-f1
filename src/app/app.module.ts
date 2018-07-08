import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@app/core/core/core.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatToolbarModule } from '@angular/material';
import { environment } from '../environments/environment';
import { SplashScreenModule } from '@app/shared/services/splash-screen/splash-screen.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    MatToolbarModule,
    ServiceWorkerModule.register(environment.swFile, { enabled: environment.production }),
    SplashScreenModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
