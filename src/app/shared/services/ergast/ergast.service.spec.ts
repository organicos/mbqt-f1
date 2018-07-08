import { TestBed, inject } from '@angular/core/testing';

import { ErgastService } from './ergast.service';
import { HttpClientModule } from '@angular/common/http';

describe('ErgastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErgastService],
      imports: [
        HttpClientModule,
      ]
    });
  });

  it('should be created', inject([ErgastService], (service: ErgastService) => {
    expect(service).toBeTruthy();
  }));

  it('should be created', inject([ErgastService], (service: ErgastService) => {
    expect(service).toBeTruthy();
  }));
});
