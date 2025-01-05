import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trajet } from '../models/trajet';

@Injectable({
  providedIn: 'root',
})
export class TrajetService {
  private apiUrl = 'http://localhost:8080/api/trajets'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Récupérer tous les trajets
  getTrajets(): Observable<Trajet[]> {
    return this.http.get<Trajet[]>(this.apiUrl);
  }

  // Récupérer un trajet par son ID
  getTrajetById(idTrajet: string): Observable<Trajet> {
    return this.http.get<Trajet>(`${this.apiUrl}/${idTrajet}`);
  }
}