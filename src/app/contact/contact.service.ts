import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private emailUrl = 'https://api.emailjs.com/api/v1.0/email/send';
  

  http = inject(HttpClient);

  constructor() {}

  emailSend(data: {}) {
    return this.http.post(
      `${this.emailUrl}`,
      {
        user_id: 'jBhUwIkPc-Do3d0we',
        service_id: 'service_el2rn6y',
        template_id: 'template_3atm598',
        template_params: { ...data },
      },
      { responseType: 'text' }
    );
  }
}
