import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  isSubmitting = false;
  isError = false;
  isSent = false;
  callBackMessage = '';

  fb = inject(FormBuilder);
  contactService = inject(ContactService);

  contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }

  sendEmail() {
    this.isSubmitting = true;
    this.isError = false;
    this.isSent = false;
    this.callBackMessage = '';
    if (this.contactForm.invalid) {
      this.callBackMessage = 'Some details are missing!';
      this.isError = true;
      return;
    }
    this.contactService.emailSend(this.contactForm.getRawValue()).subscribe({
      next: (res) => {
        this.callBackMessage = 'Message Sent';
        this.isSent = true;
        this.isError = false;
        this.isSubmitting = false;
        this.contactForm.reset();
      },
      error: (err) => {
        console.error('Error ', err);
         this.callBackMessage = err.error;
        this.isError = true;
        this.isSubmitting = false;
      },
      complete: () => (this.isSubmitting = false),
    });
  }
}
