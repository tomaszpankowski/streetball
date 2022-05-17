import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentS2Component } from './tournament-s2.component';

describe('TournamentS2Component', () => {
  let component: TournamentS2Component;
  let fixture: ComponentFixture<TournamentS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
