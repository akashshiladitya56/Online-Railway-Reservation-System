import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingTrainComponent } from './booking-train/booking-train.component';
import { TrainListComponent } from './train-list/train-list.component';
import { CreateTrainComponent } from './create-train/create-train.component';
import { DeleteTrainComponent } from './delete-train/delete-train.component';
import { ThankyouMessageComponent } from './thankyou-message/thankyou-message.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { CalPaymentComponent } from './cal-payment/cal-payment.component';
import { AdminSignInComponent } from './admin-sign-in/admin-sign-in.component';
import { AdminNavigationBarComponent } from './admin-navigation-bar/admin-navigation-bar.component';
import { FareServiceComponent } from './fare-service/fare-service.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { MakePaymentComponent } from './make-payment/make-payment.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  
  {
  path: 'home',
  component: HomeComponent,
  
  },
  {
  
  path: 'register',
  component: RegisterComponent,
  },
  {
    path: 'booking',
    component: BookingTrainComponent
  },
  {
    path: 'trainlist',
    component: TrainListComponent
  },
  {
    path: "createTrain",
    component: CreateTrainComponent
  },
  {
    path: "deleteTrain",
    component: DeleteTrainComponent
  },
  {
    path: "thankyou",
    component: ThankyouMessageComponent
  },
  {
    path: "paymentmethod",
    component: PaymentMethodComponent
  },
  {
    path: "calpayment",
    component: CalPaymentComponent
  },
  {
    path:"admin",
    component: AdminSignInComponent
  },
  {
    path: "adminnavigation",
    component: AdminNavigationBarComponent
  },
  {
    path:"fareservice",
    component: FareServiceComponent
  },
  {
    path:"contactlist",
    component: ContactListComponent
  },
  { 
    path: 'add-contact', 
    component:AddContactComponent
  },
  {
    path:'delete-contact',
    component: DeleteContactComponent
  },
  {
    path:'make-payment',
    component: MakePaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
