import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { phoneNumberValidator } from './phone-number.validator';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})

export class AddContactComponent implements OnInit {
  public addContactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.addContactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, phoneNumberValidator()]]
      // Add other contact fields as needed.
    });
  }

  addContact() {
    if (this.addContactForm.valid) {
      const newContact = this.addContactForm.value;

      // Make an HTTP POST request to save the contact
      this.http.post<any>('http://localhost:8082/contacts/addContact', newContact).subscribe(
        () => {
          // alert('Contact created successfully.');

        },
        error => {
          // console.log('Error adding contact:', error);
          // Handle the error as needed.
          // alert('Fill the contact details first.');
        }
      );
    }
  }
}

