import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalPaymentComponent } from './cal-payment.component';

describe('CalPaymentComponent', () => {
  let component: CalPaymentComponent;
  let fixture: ComponentFixture<CalPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalPaymentComponent]
    });
    fixture = TestBed.createComponent(CalPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
