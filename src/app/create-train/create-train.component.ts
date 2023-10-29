import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-train',
  templateUrl: './create-train.component.html',
  styleUrls: ['./create-train.component.css']
})
export class CreateTrainComponent {
  trainid: string = '';
  trainName: string = '';
  startStation: string = '';
  endStation: string = '';
  isTrainCreated: boolean = false;
  fare : number=0;
  constructor(private http: HttpClient, private router: Router) {}

  handleTrainid(event: any) {
    const value = event.target.value;
    if (value != null) {
      this.trainid = value.toUpperCase();
    }
  }

  handleTrainName(event: any) {
    const value = event.target.value;
    if (value != null) {
      this.trainName = value.toUpperCase();
    }
  }

  handlestartStation(event: any) {
    const value = event.target.value;
    this.startStation = value.toUpperCase();
  }

  handleendStation(event: any) {
    const value = event.target.value;
    this.endStation = value.toUpperCase();
  }

  handleSubmit() {
    const newTrain = {
      trainid: this.trainid,
      trainName: this.trainName,
      startStation: this.startStation,
      endStation: this.endStation,
      fare:this.fare
    };

    this.http.post<any>('http://localhost:8083/trains/addTrain', newTrain)
      .subscribe(
        () => {
          alert('Train created successfully.');
          this.isTrainCreated = true;
          this.trainid = '';
          this.trainName = '';
          this.startStation = '';
          this.endStation = '';
          this.fare=0;
          this.router.navigateByUrl('/trainlist');
        },
        (error) => {
          console.log('Error:', error);
          // alert('Error occurred while creating the train. Please try again.');
        }
      );
  }
}
