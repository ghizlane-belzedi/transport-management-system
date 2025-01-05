import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrajetService {
  private baseUrl = 'http://localhost:8181/trajet'; // URL de l'API backend

  constructor(private http: HttpClient) {}

  // Ajouter un trajet
  addTrajet(trajet: any): Observable<any> {
    return this.http.post(this.baseUrl, trajet);
  }

  // Obtenir tous les trajets
  getAllTrajets(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Supprimer un trajet
  deleteTrajet(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
