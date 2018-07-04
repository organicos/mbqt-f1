import { SeasonRacesModule } from './season-races.module';

describe('SeasonRacesModule', () => {
  let seasonRacesModule: SeasonRacesModule;

  beforeEach(() => {
    seasonRacesModule = new SeasonRacesModule();
  });

  it('should create an instance', () => {
    expect(seasonRacesModule).toBeTruthy();
  });
});
