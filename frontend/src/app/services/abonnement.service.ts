import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Abonnement, Utilisateur } from '../models/abonnement';

@Injectable({
  providedIn: 'root',
})
export class AbonnementService {
  private apiUrl = 'http://localhost:8085/api/abonnements'; // URL du backend

  constructor(private http: HttpClient) {}

  addAbonnement(abonnement: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/souscrire`, abonnement).pipe(
      catchError((error) => {
        console.error("Erreur lors de l'ajout de l'abonnement:", error);
        throw error; // Lance l'erreur pour la gestion côté composant
      })
    );
  }

  // Mettre à jour un abonnement existant
  updateAbonnement(id: string, abonnement: Abonnement): Observable<Abonnement> {
    return this.http.put<Abonnement>(`${this.apiUrl}/${id}`, abonnement);
  }

  // Récupérer un abonnement par ID
  getAbonnementById(id: string): Observable<Abonnement> {
    return this.http.get<Abonnement>(`${this.apiUrl}/${id}`);
  }

  // Récupérer tous les utilisateurs (pour le dropdown)
  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(
      'http://localhost:8080/api/utilisateurs'
    );
  }
}
