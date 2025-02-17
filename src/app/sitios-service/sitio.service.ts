import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sitio } from './sitio.model';


@Injectable({
  providedIn: 'root'
})
export class SitiosService {
  private apiUrl = 'http://localhost:3000/api/sitios';

  constructor(private http: HttpClient) {}

  // Obtener todos los sitios
  getSitios(limit?: number): Observable<Sitio[]> {
    const url = limit ? `${this.apiUrl}?limit=${limit}` : this.apiUrl;
    return this.http.get<Sitio[]>(url);
  }

  // Obtener un sitio aleatorio
  getRandomSitio(): Observable<Sitio> {
    return this.http.get<Sitio>(`${this.apiUrl}/random`);
  }
}
