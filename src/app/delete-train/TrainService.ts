import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  private apiUrl = 'http://localhost:8083/trains'; // Replace with the actual API URL

  constructor(private http: HttpClient) {}

  deleteTrain(trainId: string) {
    const deleteUrl = `${this.apiUrl}/delete/${trainId}`;
    return this.http.delete(deleteUrl);
  }
}
