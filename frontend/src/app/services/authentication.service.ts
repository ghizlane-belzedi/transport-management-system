import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importez HttpClient et HttpHeaders
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:8080/api/utilisateurs/connexion'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  // Méthode pour se connecter
  login(username: string, password: string): Observable<string> {
    // Configuration des en-têtes pour la requête POST
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Assurez-vous que l'API attend du JSON
    });

    // Envoi de la requête POST vers le backend avec les identifiants
    return this.http
      .post<string>(
        this.apiUrl,
        {
          nomUtilisateur: username,
          motDePasse: password,
        },
        {
          headers,
          responseType: 'text' as 'json', // Spécifiez que la réponse doit être du texte
        }
      )
      .pipe(
        catchError((error) => {
          console.error('Erreur lors de la connexion:', error);
          return throwError(() => new Error('Erreur de connexion'));
        })
      );
  }

  // Méthode pour authentifier l'utilisateur avec le token
  public authenticateUser(token: string): void {
    localStorage.setItem('authToken', token); // Sauvegarde du token JWT dans le localStorage
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken'); // Vérifie si un token est stocké
  }

  public logout(): void {
    localStorage.removeItem('authToken'); // Supprime le token du localStorage
  }
}
