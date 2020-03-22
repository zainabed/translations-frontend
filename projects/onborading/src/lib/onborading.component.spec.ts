import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboradingComponent } from './onborading.component';

describe('OnboradingComponent', () => {
  let component: OnboradingComponent;
  let fixture: ComponentFixture<OnboradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
