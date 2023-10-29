import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface ContactItem {
  id: string;
  name: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public contactList: ContactItem[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchContact();
  }

  fetchContact() {
    this.http.get<ContactItem[]>('http://localhost:8082/contacts/findAllContacts').subscribe(
      (response: ContactItem[]) => {
        this.contactList = response;
      },
      error => {
        console.log('Error fetching contact list:', error);
      }
    );
  }
}

