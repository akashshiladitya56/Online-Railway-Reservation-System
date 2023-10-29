import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AdminNavigationBarComponent } from './admin-navigation-bar/admin-navigation-bar.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { BookingTrainComponent } from './booking-train/booking-train.component';
import { CalPaymentComponent } from './cal-payment/cal-payment.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateTrainComponent } from './create-train/create-train.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { DeleteTrainComponent } from './delete-train/delete-train.component';
import { FareServiceComponent } from './fare-service/fare-service.component';
import { LoginComponent } from './login/login.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { RegisterComponent } from './register/register.component';
import { ThankyouMessageComponent } from './thankyou-message/thankyou-message.component';
import { TrainListComponent } from './train-list/train-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MakePaymentComponent } from './make-payment/make-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddContactComponent,
    AdminNavigationBarComponent,
    AdminSignInComponent,
    BookingTrainComponent,
    CalPaymentComponent,
    ContactListComponent,
    CreateTrainComponent,
    DeleteContactComponent,
    DeleteTrainComponent,
    FareServiceComponent,
    LoginComponent,
    PaymentMethodComponent,
    RegisterComponent,
    ThankyouMessageComponent,
    TrainListComponent,
    MakePaymentComponent
  ],
imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  RouterModule,
  RouterModule.forRoot([])
],
providers: [TrainListComponent],
bootstrap: [AppComponent]
})
export class AppModule { }

// imports: [
//   BrowserModule,
//   AppRoutingModule
// ],
// providers: [],
// bootstrap: [AppComponent]
// })
// export class AppModule { }