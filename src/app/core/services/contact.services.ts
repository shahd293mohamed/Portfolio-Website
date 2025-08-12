import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getContactInfo(): Observable<any> {
    return this.http.get(`${this.baseUrl}/mycontact`);
  }

  addContactInfo(contactData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/mycontact`, contactData);
  }


  sendMessage(messageData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/contactus`, messageData);
  }
  getMessage(): Observable<any> {
    return this.http.get(`${this.baseUrl}/contactus`);
  }
}
