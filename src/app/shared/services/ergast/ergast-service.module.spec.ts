import { ErgastServiceModule } from './ergast-service.module';

describe('ErgastServiceModule', () => {
  let ergastServiceModule: ErgastServiceModule;

  beforeEach(() => {
    ergastServiceModule = new ErgastServiceModule();
  });

  it('should create an instance', () => {
    expect(ergastServiceModule).toBeTruthy();
  });
});
