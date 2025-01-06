import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = 'http://localhost:8083/api/tickets'; // URL du backend Spring Boot

  constructor(private http: HttpClient) {}

  // Méthode pour acheter un ticket
  acheterTicket(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.apiUrl, ticket);
  }

  // Méthode pour récupérer les tickets d'un utilisateur
  getTicketsByUser(userId: string): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}?userId=${userId}`);
  }
}
