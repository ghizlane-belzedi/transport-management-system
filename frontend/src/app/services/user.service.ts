import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}