
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FareServiceComponent } from '../fare-service/fare-service.component';
export interface Train {
  trainid: number;
  trainName: string;
  startStation: string;
  endStation: string;
  fare: number;
}
@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css']
})
export class TrainListComponent implements OnInit {
  traintickets: Train[] = [];

  constructor(private router: Router, private http: HttpClient, private fareService: FareServiceComponent) {}

  ngOnInit() {
    this.fetchTrainTickets();
  }
  fetchTrainTickets() {
    console.log('Fetching train tickets...');
    this.http.get<Train[]>('http://localhost:8083/search/findAllTrains').subscribe(
      response => {
        console.log('API Response:', response);
        this.traintickets = response;
        const fare = response.reduce((total, train) => total + train.fare, 0);
        console.log("traintickets",this.traintickets)
        console.log('Total Fare:', fare);
        console.log(this.traintickets);
        this.fareService.setFare(fare);
      },
      error => {
        console.log('API Error:', error);
      }
    );
  }
  
calculateFare(SOURCE: string, DESTINATION: string): number {
  this.fetchTrainTickets();
  console.log('SOURCE:', SOURCE);
  console.log('DESTINATION:', DESTINATION);

  const source=SOURCE.trim().toUpperCase();
  const destination=DESTINATION.trim().toUpperCase();

  console.log('Source from sessionStorage:', source);
  console.log('Destination from sessionStorage:', destination);



   console.log('Train Tickets:', this.traintickets);

  const matchingTrain = this.traintickets.find(
    train =>
      train.startStation.trim().toUpperCase() === source && train.endStation.trim().toUpperCase() === destination
  );

  console.log('Matching Train:', matchingTrain);

  console.log('matchingTrain:', matchingTrain ? matchingTrain.fare : 500);
  return matchingTrain ? matchingTrain.fare : 500;
}

}
