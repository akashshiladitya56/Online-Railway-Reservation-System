import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouMessageComponent } from './thankyou-message.component';

describe('ThankyouMessageComponent', () => {
  let component: ThankyouMessageComponent;
  let fixture: ComponentFixture<ThankyouMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThankyouMessageComponent]
    });
    fixture = TestBed.createComponent(ThankyouMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
