import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FareServiceComponent } from '../fare-service/fare-service.component';
import { DESTINATION, NOOFTICKETS, SOURCE } from '../booking-train/booking-train.component';
import { TrainListComponent } from '../train-list/train-list.component';
import { SharedService } from '../shared.service';
//export const total: number = 0; // Export the total variable

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {
  
  method: string = '';
  source: string = '';
  destination: string = '';
  nooftickets: string = '';
  total: number = 0;

  constructor(
    private router: Router,
    private fareService: FareServiceComponent,
    private trainListComponent: TrainListComponent,
    private sharedService: SharedService,
  ) {}

  ngOnInit() {
    this.source = sessionStorage.getItem(SOURCE) || '';
    this.destination = sessionStorage.getItem(DESTINATION) || '';
    this.nooftickets = sessionStorage.getItem(NOOFTICKETS) || '';
    this.total = this.trainListComponent.calculateFare(this.source, this.destination) * parseInt(this.nooftickets);
    this.sharedService.setTotalValue(this.total);
  }

  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.method = target.value;
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    const method = this.method;

    if (!method) {
      alert('Please select a payment method.');
      return;
    }

    if (method === 'mobile') {
      this.router.navigateByUrl('/make-payment');
    }
    console.log("total amount of tickets :"+this.total)
    fetch('http://localhost:5656/paymentgateway/createOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        source: this.source,
        destination: this.destination,
        nooftickets: this.nooftickets,
        fare: this.total
      })
    })
      .then(response => response.json())
      .then(() => {
        // alert('Your ticket was not booked');
      })
      .catch(err => {
        // alert('Your ticket was successfully booked');
      });
   }
}

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { TrainListComponent } from '../train-list/train-list.component';
// import { DESTINATION, NOOFTICKETS, SOURCE } from '../booking-train/booking-train.component';
// export const total: number = 0;
// @Component({
//   selector: 'app-payment-method',
//   templateUrl: './payment-method.component.html',
//   styleUrls: ['./payment-method.component.css']
// })
// export class PaymentMethodComponent implements OnInit {
//   method: string = '';
//   source: string = '';
//   destination: string = '';
//   nooftickets: string = '';
//   total: number = 0;
//   constructor(

//     private router: Router,

//     private trainListComponent: TrainListComponent

//   ) {}
//   ngOnInit() {

//     this.source = sessionStorage.getItem('SOURCE') || '';

//     this.destination = sessionStorage.getItem('DESTINATION') || '';

//     this.nooftickets = sessionStorage.getItem('NOOFTICKETS') || '';

//     this.total = this.trainListComponent.calculateFare(this.source, this.destination) * parseInt(this.nooftickets);

//   }
//   handleChange(event: Event): void {

//     const target = event.target as HTMLInputElement;

//     this.method = target.value;

//   }

 

//   handleSubmit(event: Event): void {

//     event.preventDefault();

//     const method = this.method;

 

//     if (!method) {

//       alert('Please select a payment method.');

//       return;

//     }

 

//     if (method === 'mobile') {

//       this.router.navigateByUrl('/make-payment');

//     }

 

//     fetch('http://localhost:5656/paymentgateway/createOrder', {

//       method: 'POST',

//       headers: {

//         'Content-Type': 'application/json',

//       },

//       body: JSON.stringify({

//         source: this.source,

//         destination: this.destination,

//         nooftickets: this.nooftickets,

//         fare: this.total

//       })

//     })

//     .then(response => response.json())

//     .then(data => {

//       // Handle the response data here

//       console.log('Response:', data);

//     })

//     .catch(err => {

//       // Handle any errors here

//       console.error('Error:', err);

//     });

//   }

// }
