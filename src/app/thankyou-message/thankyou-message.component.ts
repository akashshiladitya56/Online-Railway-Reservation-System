import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou-message',
  templateUrl: './thankyou-message.component.html',
  styleUrls: ['./thankyou-message.component.css']
})
export class ThankyouMessageComponent {
  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigateByUrl('/');
  }
}
