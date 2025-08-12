import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iservices} from '../model';

@Injectable({
  providedIn: 'root'
})
export class ServicesServices {
  private baseUrl = 'http://localhost:3000/services';

  constructor(private http: HttpClient) { }

  getservices(): Observable<Iservices[]> {
    return this.http.get<Iservices[]>(this.baseUrl);
  }

  getservicesById(id: string): Observable<Iservices> {
    return this.http.get<Iservices>(`${this.baseUrl}/${id}`);
  }


  addservices(formData: FormData): Observable<Iservices> {
    return this.http.post<Iservices>(this.baseUrl, formData);
  }

  updateservices(id: string, formData: FormData): Observable<Iservices> {
    return this.http.put<Iservices>(`${this.baseUrl}/${id}`, formData);
  }
}
