import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtsS1Component } from './courts-s1.component';

describe('CourtsS1Component', () => {
  let component: CourtsS1Component;
  let fixture: ComponentFixture<CourtsS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtsS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtsS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
