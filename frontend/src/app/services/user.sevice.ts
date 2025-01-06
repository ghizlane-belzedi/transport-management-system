import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/utilisateurs'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Ajouter un utilisateur
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
  // Récupérer tous les utilisateurs
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  // Supprimer un utilisateur par ID
  // user.service.ts
  deleteUser(nomUtilisateur: string): Observable<void> {
    const url = `${this.apiUrl}/${nomUtilisateur}`; // Modifiez l'URL pour correspondre à votre API
    return this.http.delete<void>(url);
  }
}
