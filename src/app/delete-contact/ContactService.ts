import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  private apiUrl = 'http://localhost:8082/contacts'; // Replace with the actual API URL

  constructor(private http: HttpClient) {}

  deleteContact(id: string) {
    const deleteUrl = `${this.apiUrl}/delcontact/${id}`;
    return this.http.delete(deleteUrl);
  }
}
