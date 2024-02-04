// contact.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [FormBuilder]
})
export class ContactComponent {
  contactForm: FormGroup;
  submitMessage: string = '';


  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });
  }

 onSubmit(): void {
    this.contactService.submitContactForm(this.contactForm.value).subscribe(
      () => {
        this.submitMessage = 'Form submitted successfully!';
      },
      (error) => {
        console.error('Error submitting form:', error);
        this.submitMessage = 'Error submitting form. Please try again.';
      }
    );
  }
}