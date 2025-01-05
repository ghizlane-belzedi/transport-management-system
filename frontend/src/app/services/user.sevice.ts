import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  private apiUrl = 'http://localhost:8080/api/utilisateurs'; // URL du backend

  constructor(private http: HttpClient) {}

  // Ajouter un utilisateur
  addUtilisateur(utilisateur: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, utilisateur);
  }
}
