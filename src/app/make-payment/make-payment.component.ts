import { Component } from '@angular/core';
//import {total} from '../payment-method/payment-method.component'
import { SharedService } from '../shared.service';
declare var Razorpay: any;

@Component({
  selector: 'app-make-payment',
  templateUrl: './make-payment.component.html',
  styleUrls: ['./make-payment.component.css']
})
export class MakePaymentComponent  {

  
  // Constructor
  constructor(private sharedService: SharedService) {
    // Parse the 'total' value as a number and assign it to 'amount'
    // this.pay = total;
    // console.log(total)
  }
  pay: number=this.sharedService.getTotalValue()*100; // Declare 'amount' as a class property
  //console.log("payment:"+pay)

  // This method is called when the user clicks the payment button
  payNow() {
    const Razorpayoptions = {
      key: 'rzp_test_LF1tHGoalAgxOT',
      amount: this.pay, // Amount in paise (e.g., 1000 paise = ₹10)
      currency: 'INR', // Currency code
      name: 'Bharat Railway Payment',
      description: 'Ticket Booking Description',
      image: '',
      // prefill:{
      //   name:"akash shiladitya",
      //   email: "akashshiladitya@gmail.com",
      //   phone:"6202627184"
      // },
      order_id: '', // You will receive this from your server
      theme:{
        color:'#f37254'
      },
      modal:{
        ondismiss:()=>{
          console.log('dismissed')
        }
      }
      
    }
    const successCallback =(paymentid: any)=>{
      console.log('Payment successful. Payment ID:', paymentid);
    }
    const failureCallback = (e:any)=>{
      console.log('Payment failed',e);
    }

    // const rzp = new Razorpay(options);
    // rzp.open()
    Razorpay.open(Razorpayoptions,successCallback,failureCallback) // Open the Razorpay payment form
  }
}


  // regId: string = "";
  // courseId: string = "";
  // assId: string = "";
  // fees: string = "";

  // constructor() { }

  // ngOnInit(): void {
  // }

  // loadScript(src: string): Promise<boolean> {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = src;

  //     script.onload = () => {
  //       resolve(true);
  //     };

  //     script.onerror = () => {
  //       resolve(false);
  //     };

  //     document.body.appendChild(script);
  //   });
  // }

  // displayRazorpay(amount: number): void {
  //   console.log("hello");

  //   this.loadScript("https://checkout.razorpay.com/v1/checkout.js").then((res) => {
  //     console.log("aa rha ");
  //     if (!res) {
  //       alert("You are offline... Failed to load Razorpay SDK");
  //       return;
  //     }

  //     const options = {
  //       key: "your_razorpay_key_here",
  //       currency: "INR",
  //       amount: amount * 100,
  //       name: "Course",
  //       description: "Thanks for purchasing",
  //       image: "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",
  //       handler: (response: any) => {
  //         alert("Payment Successfully");
  //         console.log("payment is happening");
  //       },
  //       prefill: {
  //         name: "Course",
  //       },
  //     };

  //     const paymentObject = new Razorpay(options);
  //     paymentObject.open();
  //   });
  // }
// }