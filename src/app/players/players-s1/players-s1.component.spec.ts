import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersS1Component } from './players-s1.component';

describe('PlayersS1Component', () => {
  let component: PlayersS1Component;
  let fixture: ComponentFixture<PlayersS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
