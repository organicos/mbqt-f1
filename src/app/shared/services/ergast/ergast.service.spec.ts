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

  describe('#seasonChampion', () => {

    const year = '2005';

    it('should return a promise', () => {

      const call = service.seasonChampion(year);

      expect(call.then).toBeTruthy();

    });

    it('should load sesions', () => {

      const endpoint = API.CHAMPION_BY_YEAR_API.replace('${year}', year);

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

    it('should throw a custom error if a wrong year is given`', () => {
      const endpoint = API.CHAMPION_BY_YEAR_API.replace('${year}', year);

      service.seasonChampion(null)
      .then(() => {}, err => {
        expect(err).toBe(`ErgastService Error:: Need to improve error log`);
      });

      httpMock.expectNone(endpoint);
    });

  });

});
