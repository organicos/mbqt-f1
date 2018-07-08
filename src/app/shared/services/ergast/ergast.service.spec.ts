import { TestBed, inject, async, getTestBed } from '@angular/core/testing';

import { ErgastService, API } from './ergast.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ErgastService', () => {
  let injector: TestBed;
  let service: ErgastService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErgastService],
      imports: [
        HttpClientTestingModule,
      ]
    });

    injector = getTestBed();
    service = injector.get(ErgastService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load sesons', () => {

    const year = '2005';

    const endpoint = API.CHAMPION_BY_YEAR_API.replace('${year}', year);

    const states = {
      shown: false,
      hidden: false
    };

    service.loading$.subscribe(state => {
      const which = state ? 'shown' : 'hidden';
      states[which] = true;
    });

    const seasonMock = [
      { foo: 'bar' }
    ];

    service.seasonChampion(year).then(season => {
      expect(season).toBeTruthy(2);
    });

    const req = httpMock.expectOne(endpoint);

    expect(req.request.method).toBe('GET');

    req.flush(seasonMock);

  });

});
