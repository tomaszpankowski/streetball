import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtsS2Component } from './courts-s2.component';

describe('CourtsS2Component', () => {
  let component: CourtsS2Component;
  let fixture: ComponentFixture<CourtsS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtsS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtsS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
