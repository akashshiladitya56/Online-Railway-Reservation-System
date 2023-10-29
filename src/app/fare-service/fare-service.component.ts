import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-fare-service',
  templateUrl: './fare-service.component.html',
  styleUrls: ['./fare-service.component.css']
})
@Injectable({
  providedIn:'root'
})
export class FareServiceComponent {
  private fareSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  fare$ = this.fareSubject.asObservable();

  setFare(fare: number) {
    this.fareSubject.next(fare);
  }
}
