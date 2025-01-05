// services/abonnement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Abonnement } from '../models/abonnement';
 // Importez l'interface Abonnement

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {
  private apiUrl = 'http://localhost:3000/api/abonnements'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Récupérer tous les abonnements
  getAbonnements(): Observable<Abonnement[]> {
    return this.http.get<Abonnement[]>(this.apiUrl);
  }

  // Récupérer un abonnement par son ID
  getAbonnementById(id: string): Observable<Abonnement> {
    return this.http.get<Abonnement>(`${this.apiUrl}/${id}`);
  }

  // Ajouter un nouvel abonnement
  addAbonnement(abonnement: Abonnement): Observable<Abonnement> {
    return this.http.post<Abonnement>(this.apiUrl, abonnement);
  }

  // Mettre à jour un abonnement existant
  updateAbonnement(id: string, abonnement: Abonnement): Observable<Abonnement> {
    return this.http.put<Abonnement>(`${this.apiUrl}/${id}`, abonnement);
  }

  // Supprimer un abonnement
  deleteAbonnement(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}