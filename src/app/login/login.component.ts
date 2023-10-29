import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string='';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  Login() {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    // Assuming your backend API expects an object with 'username' and 'password' properties
    const bodyData = {
      username: username,
      password: password
    };

    this.http.post("http://localhost:8080/auth", bodyData, { responseType: 'text' }).subscribe(
  (response: any) => {
    if (response === 'Login Success') {
      this.router.navigateByUrl("/home");
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  },
  (error) => {
    console.error(error);
    this.errorMessage = 'An error occurred during the login process.';
  }
);
  }
}

