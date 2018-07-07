import { ChampionsPageModule } from './champions-page.module';

describe('ChampionsPageModule', () => {
  let championsPageModule: ChampionsPageModule;

  beforeEach(() => {
    championsPageModule = new ChampionsPageModule();
  });

  it('should create an instance', () => {
    expect(championsPageModule).toBeTruthy();
  });
});
