import { Component } from '@angular/core';
import { TrainService } from './TrainService';

@Component({
  selector: 'app-delete-train',
  templateUrl: './delete-train.component.html',
  styleUrls: ['./delete-train.component.css']
})
export class DeleteTrainComponent {
  trainid='';
  alertMessage='';

  constructor(private trainService: TrainService) {}

  deleteTrain() {
    this.trainService.deleteTrain(this.trainid).subscribe(
      response => {
        this.alertMessage = 'Train Deleted Successfully';
      },
      error => {
        console.error(error);
      }
    );
  }
}


