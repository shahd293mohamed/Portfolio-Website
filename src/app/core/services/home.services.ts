import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ihome} from '../model';

@Injectable({
  providedIn: 'root'
})
export class HomeServices {
  private baseUrl = 'http://localhost:3000/home';

  constructor(private http: HttpClient) { }

  getHome(): Observable<Ihome[]> {
    return this.http.get<Ihome[]>(this.baseUrl);
  }

  getHomeById(id: string) {
    return this.http.get<Ihome>(`${this.baseUrl}/${id}`);
  }

  addHome(formData: FormData): Observable<Ihome> {
    return this.http.post<Ihome>(this.baseUrl, formData);
  }

  updateHome(id: string, formData: FormData): Observable<Ihome> {
    return this.http.put<Ihome>(`${this.baseUrl}/${id}`, formData);
  }
}
