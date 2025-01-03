import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string; }, password: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(user: { email: string; password: string }) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
