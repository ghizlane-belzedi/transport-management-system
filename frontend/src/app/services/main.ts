import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trajet } from '../models/trajet';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private apiUrl = 'http://localhost:8181/trajet'; // Remplacez par votre endpoint API

  constructor(private http: HttpClient) {}

  // Récupérer tous les trajets
  getTrajets(): Observable<Trajet[]> {
    return this.http.get<Trajet[]>(this.apiUrl);
  }

  // Récupérer un trajet par son ID
  getTrajetById(id: string): Observable<Trajet> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Trajet>(url);
  }

  // Ajouter un nouveau trajet
  addTrajet(trajet: Trajet): Observable<Trajet> {
    return this.http.post<Trajet>(this.apiUrl, trajet);
  }

  // Mettre à jour un trajet existant
  updateTrajet(id: string, trajet: Trajet): Observable<Trajet> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Trajet>(url, trajet);
  }

  // Supprimer un trajet
  deleteTrajet(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Vérifier si un trajet avec cet ID existe déjà
  checkIfTrajetExists(id: string): Observable<boolean> {
    const url = `${this.apiUrl}/exists/${id}`;
    return this.http.get<boolean>(url);
  }
}
