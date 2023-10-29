import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  mobileNumber: string = '';
  name: string = '';
  usernameError: string = '';
  passwordError: string = '';
  mobileNumberError: string = '';
  nameError: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  valid(): boolean {
    if (
      this.username.length < 4 ||
      this.password.length < 6 ||
      this.mobileNumber.length !=10 ||
      this.name.length < 2
      
    ) {
      this.usernameError = 'Invalid Username';
      this.passwordError = 'Password length should be more than 6';
      this.mobileNumberError = 'Mobile number should be 10 digits';
      this.nameError = 'Name should be more than 2 letter';
      return false;
    } else {
      return true;
    }
  }

  register():void {
    this.usernameError = '';
    this.passwordError = '';
    this.mobileNumberError = '';
    this.nameError = '';

    if (this.valid()) {
      const url = 'http://localhost:8080/subs';
      const requestBody = {
        name: this.name,
        username: this.username,
        password: this.password
        // mobileNumber: this.mobileNumber,
        
      };

      this.http.post(url, requestBody).subscribe(
        () => {
          alert('Your registration is successfully submitted');
        },
        () => {
          alert('Your registration is not submitted');
        }
      );
    }
  }
}
