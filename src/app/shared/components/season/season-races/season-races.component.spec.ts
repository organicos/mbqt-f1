import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonRacesComponent } from './season-races.component';

describe('SeasonRacesComponent', () => {
  let component: SeasonRacesComponent;
  let fixture: ComponentFixture<SeasonRacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonRacesComponent ]
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
