import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBoxInfoComponent } from './small-box-info.component';

describe('SmallBoxInfoComponent', () => {
  let component: SmallBoxInfoComponent;
  let fixture: ComponentFixture<SmallBoxInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallBoxInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBoxInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
