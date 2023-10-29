import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
export const SOURCE = "STARTSTATION";
export const DESTINATION = "ENDSTATION";
export const NOOFTICKETS = "QUANTITY";

@Component({
  selector: 'app-booking-train',
  templateUrl: './booking-train.component.html',
  styleUrls: ['./booking-train.component.css']
})
@Injectable()
export class BookingTrainComponent {
  //trainName: string ="";
  startStation: string ="";
  endStation: string ="";
  quantity: string="";
  //fare: string="";
  mymessage: string | undefined;

  setStartStation(startStation: string) {
    this.startStation = startStation;
  }

  getStartStation(): string {
    return this.startStation;
  }

  setEndStation(endStation: string) {
    this.endStation = endStation;
  }

  getEndStation(): string {
    return this.endStation;
  }

  setQuantity(quantity: string) {
    this.quantity = quantity;
  }

  getQuantity(): string {
    return this.quantity;
  }
  


 
  constructor(private router: Router, private http: HttpClient) {}

  checkSource(event: Event) {
    const selectedSource = (event.target as HTMLSelectElement).value;
    this.startStation = selectedSource;
    console.log('Source: ' + selectedSource);
  }

  checkDestination(event: Event) {
    const selectedDestination = (event.target as HTMLSelectElement).value;
    this.endStation = selectedDestination;
    console.log('Destination: ' + selectedDestination);
  }

  checkTickets(event: Event) {
    const tickets = (event.target as HTMLInputElement).value;
    this.quantity = tickets;
    console.log('No of Tickets: ' + tickets);
  }

  storeDetails() {
    if (!this.startStation) {
      alert('SOURCE cannot be empty');
      return;
    }

    if (!this.endStation) {
      alert('DESTINATION cannot be empty');
      return;
    }

    if (!this.quantity) {
      alert('NO OF TICKETS cannot be empty');
      return;
    }

    sessionStorage.setItem(SOURCE, this.startStation);
    sessionStorage.setItem(DESTINATION, this.endStation);
    sessionStorage.setItem(NOOFTICKETS, this.quantity);

    const bookingOrder = {
      startStation: this.startStation,
      endStation: this.endStation,
      quantity: this.quantity
    };
    const apiEndpoint = 'http://localhost:8084/orders/addOrder';
    
     
    
    this.http.post(apiEndpoint, bookingOrder, { responseType: 'text' }).pipe(
    
      map((response) => {
    
        console.log('Booking order posted successfully:', response);
    
      }),
    
      catchError((error) => {
    
        console.error('Failed to post booking order:', error);
    
        throw error;
    
      })
    
    ).subscribe(() => {
    
      this.router.navigateByUrl('/paymentmethod');
    
    });
    

    // const apiEndpoint='http://localhost:8084/orders/addOrder';
    // this.http.post(apiEndpoint, bookingOrder).subscribe(
    //   (response) => {
    //     console.log('Booking order posted successfully:', response);
    //     this.router.navigateByUrl('/paymentmethod');
    //     // Do something with the response if needed
    //   },
    //   (error) => {
    //     console.error('Failed to post booking order:', error);
    //     // Handle error if needed
    //   }
    // );
    //this.router.navigateByUrl('/paymentmethod');
    
  }
  
}

