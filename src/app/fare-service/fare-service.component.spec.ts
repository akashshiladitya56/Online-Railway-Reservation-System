import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FareServiceComponent } from './fare-service.component';

describe('FareServiceComponent', () => {
  let component: FareServiceComponent;
  let fixture: ComponentFixture<FareServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FareServiceComponent]
    });
    fixture = TestBed.createComponent(FareServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
