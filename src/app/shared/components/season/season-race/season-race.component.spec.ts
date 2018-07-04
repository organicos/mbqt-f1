import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonRaceComponent } from './season-race.component';

describe('SeasonRaceComponent', () => {
  let component: SeasonRaceComponent;
  let fixture: ComponentFixture<SeasonRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
