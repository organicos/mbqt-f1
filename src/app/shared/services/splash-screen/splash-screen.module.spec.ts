import { SplashScreenModule } from './splash-screen.module';

describe('SplashScreenModule', () => {
  let splashScreenModule: SplashScreenModule;

  beforeEach(() => {
    splashScreenModule = new SplashScreenModule();
  });

  it('should create an instance', () => {
    expect(splashScreenModule).toBeTruthy();
  });
});
