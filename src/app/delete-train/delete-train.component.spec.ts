import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTrainComponent } from './delete-train.component';

describe('DeleteTrainComponent', () => {
  let component: DeleteTrainComponent;
  let fixture: ComponentFixture<DeleteTrainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteTrainComponent]
    });
    fixture = TestBed.createComponent(DeleteTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
