import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigBoxInfoComponent } from './big-box-info.component';

describe('BigBoxInfoComponent', () => {
  let component: BigBoxInfoComponent;
  let fixture: ComponentFixture<BigBoxInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigBoxInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigBoxInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
