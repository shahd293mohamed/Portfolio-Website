import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iprojects } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private baseUrl = 'http://localhost:3000/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Iprojects[]> {
    return this.http.get<Iprojects[]>(this.baseUrl);
  }

  getProjectById(id: string) {
  return this.http.get<Iprojects>(`${this.baseUrl}/${id}`);
}
  addProject(formData: FormData): Observable<Iprojects> {
    return this.http.post<Iprojects>(this.baseUrl, formData);
  }

  updateProject(id: string, formData: FormData): Observable<Iprojects> {
    return this.http.put<Iprojects>(`${this.baseUrl}/${id}`, formData);
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
