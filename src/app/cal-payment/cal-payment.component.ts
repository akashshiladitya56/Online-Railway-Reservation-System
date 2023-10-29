import { Component, OnInit } from '@angular/core';
// import { SOURCE, DESTINATION, NOOFTICKETS } from '../booking-train/booking-train.component';
import { BookingTrainComponent }from '../booking-train/booking-train.component'
export const TOTALAMOUNT = 'TOTALAMOUNT';

@Component({
  selector: 'app-cal-payment',
  templateUrl: './cal-payment.component.html',
  styleUrls: ['./cal-payment.component.css']
})

export class CalPaymentComponent implements OnInit{
  total: number=0;

  constructor(private ticketBookingService: BookingTrainComponent) {}

  ngOnInit() {
    this.calPay();
  }

  calPay() {
    const source = this.ticketBookingService.getStartStation();
    const destination = this.ticketBookingService.getEndStation();
    const numOfTickets = this.ticketBookingService.getQuantity();
    
    if (source === 'Patna' && destination === 'New Delhi') {
      this.total = Number(numOfTickets) * 370;
      sessionStorage.setItem(TOTALAMOUNT, this.total.toString());
    } else if (source === 'Puri' && destination === 'Howrah') {
      this.total = Number(numOfTickets) * 50;
      sessionStorage.setItem(TOTALAMOUNT, this.total.toString());
    }
  }
}
