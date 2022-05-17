import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentS1Component } from './tournament-s1.component';

describe('TournamentS1Component', () => {
  let component: TournamentS1Component;
  let fixture: ComponentFixture<TournamentS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournamentS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
