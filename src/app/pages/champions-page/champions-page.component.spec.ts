import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsPageComponent } from './champions-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatProgressBarModule } from '@angular/material';
import { SeasonsModule } from '@app/shared/components/season/seasons/seasons.module';
import { HttpClientModule } from '@angular/common/http';

describe('ChampionsPageComponent', () => {
  let component: ChampionsPageComponent;
  let fixture: ComponentFixture<ChampionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionsPageComponent ],
      imports: [
        RouterTestingModule,
        MatProgressBarModule,
        SeasonsModule,
        HttpClientModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
