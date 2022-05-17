import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersS2Component } from './players-s2.component';

describe('PlayersS2Component', () => {
  let component: PlayersS2Component;
  let fixture: ComponentFixture<PlayersS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
