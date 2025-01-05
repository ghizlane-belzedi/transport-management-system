import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';


@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiUrl = 'https://localhost:3000/tickets'; // Remplacez par l'URL de votre API

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