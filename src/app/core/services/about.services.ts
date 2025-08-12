// 


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iabout, Iprojects } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  baseUrl = 'http://localhost:3000';

  constructor(private _http: HttpClient) {}

  getAbout():Observable<Iabout[]> {
    return this._http.get<Iabout[]>(`${this.baseUrl}/aboutus`);
  }

  // createAbout(about: Iabout): Observable<Iabout> {
  //   return this._http.post<Iabout>(`${this.baseUrl}/aboutus`, about);
  // }

  // updateAbout(id: string, about: Iabout): Observable<Iabout> {
  //   return this._http.put<Iabout>(`${this.baseUrl}/aboutus/${id}`, about);
  // }
  createAbout(formData: FormData): Observable<Iabout[]> {
  return this._http.post<Iabout[]>(`${this.baseUrl}/aboutus`, formData);
}

// updateAbout(formData: FormData): Observable<Iabout> {
//   return this._http.put<Iabout>(`${this.baseUrl}/aboutus`, formData);
// }
updateAbout(_id: string, formData: FormData): Observable<Iabout> {
  return this._http.patch<Iabout>(`${this.baseUrl}/aboutus/${_id}`, formData);
}



  // getProjects():Observable<Iprojects[]> {
  //   return this._http.get<Iprojects[]>(`${this.baseUrl}/projects`);
  // }
}
