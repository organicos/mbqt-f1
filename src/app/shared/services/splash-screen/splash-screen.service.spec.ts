import { TestBed, inject } from '@angular/core/testing';

import { SplashScreenService } from './splash-screen.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SplashScreenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SplashScreenService],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
      ]
    });
  });

  it('should be created', inject([SplashScreenService], (service: SplashScreenService) => {
    expect(service).toBeTruthy();
  }));
});
