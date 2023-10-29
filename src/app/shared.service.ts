import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private totalValue: number = 0;

  getTotalValue(): number {
    return this.totalValue;
  }

  setTotalValue(value: number): void {
    this.totalValue = value;
  }
}
