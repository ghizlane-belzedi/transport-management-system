import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trajet } from '../models/trajet';
 // Import the Trajet model

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private apiUrl = 'http://localhost:8181/trajets'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Fetch all trajets
  getTrajets(): Observable<Trajet[]> {
    return this.http.get<Trajet[]>(this.apiUrl);
  }

  // Fetch a single trajet by ID
  getTrajetById(id: string): Observable<Trajet> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Trajet>(url);
  }

  // Add a new trajet
  addTrajet(trajet: Trajet): Observable<Trajet> {
    return this.http.post<Trajet>(this.apiUrl, trajet);
  }

  // Update an existing trajet
  updateTrajet(id: string, trajet: Trajet): Observable<Trajet> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Trajet>(url, trajet);
  }

  // Delete a trajet
  deleteTrajet(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}