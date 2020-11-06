import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallDayComponent } from './overall-day.component';

describe('OverallDayComponent', () => {
  let component: OverallDayComponent;
  let fixture: ComponentFixture<OverallDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
