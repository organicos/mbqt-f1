import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonRacesComponent } from './season-races.component';
import { SeasonRaceModule } from '@app/shared/components/season/season-race/season-race.module';
import { HttpClientModule } from '@angular/common/http';

describe('SeasonRacesComponent', () => {
  let component: SeasonRacesComponent;
  let fixture: ComponentFixture<SeasonRacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonRacesComponent ],
      imports: [
        SeasonRaceModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
