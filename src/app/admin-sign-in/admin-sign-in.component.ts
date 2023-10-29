import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent {
  loginForm: FormGroup;

  constructor(private router: Router, private http: HttpClient) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  signInSuccess(userData: any): void {
    const fromUrl = localStorage.getItem('fromUrl');
    if (fromUrl) {
      this.router.navigateByUrl(fromUrl);
    } else {
      this.router.navigateByUrl('/adminnavigation');
    }
  }

  login(): void {
    const userData = {
      username: this.loginForm.get('username')!.value,
      password: this.loginForm.get('password')!.value
    };

    const adminUsername = 'admin';
    const adminPassword = 'admin';

    if (userData.username === adminUsername && userData.password === adminPassword) {
      // Login successful
      const loggedInUser = {
        token: 'your_token_value_here',
        name: userData.username
      };
      this.signInSuccess(loggedInUser);
    } else {
      // Invalid username or password
      alert('Your username and password are not correct');
    }
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.login();
    }
  }
}
