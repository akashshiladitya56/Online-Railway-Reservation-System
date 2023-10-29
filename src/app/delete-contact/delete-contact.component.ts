import { Component } from '@angular/core';
import { TrainService }from './ContactService'
@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.css']
})
export class DeleteContactComponent {
  id='';
  alertMessage='';

  constructor(private trainService: TrainService) {}

  deleteContact() {
    this.trainService.deleteContact(this.id).subscribe(
      response => {
        this.alertMessage = 'Contact Deleted Successfully';
      },
      error => {
        console.error(error);
      }
    );
  }
}

