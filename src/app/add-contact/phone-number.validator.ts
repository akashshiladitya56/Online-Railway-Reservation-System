import { AbstractControl, ValidatorFn } from '@angular/forms';
export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const phoneNumber = control.value;
    const isValidPhoneNumber = /^\d{10}$/.test(phoneNumber);
    return isValidPhoneNumber ? null : { 'invalidPhoneNumber': true };
  };
}
