import { SeasonRaceModule } from './season-race.module';

describe('SeasonRaceModule', () => {
  let seasonRaceModule: SeasonRaceModule;

  beforeEach(() => {
    seasonRaceModule = new SeasonRaceModule();
  });

  it('should create an instance', () => {
    expect(seasonRaceModule).toBeTruthy();
  });
});
