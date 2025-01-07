import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrajetBus } from '../models/trajet-bus.model';

@Injectable({
  providedIn: 'root',
})
export class TrajetBusService {
  private apiUrl = 'http://localhost:8181/trajetBus';

  constructor(private http: HttpClient) {}

  getAllTrajetBus(): Observable<TrajetBus[]> {
    return this.http.get<TrajetBus[]>(this.apiUrl);
  }

  getTrajetBusById(id: string): Observable<TrajetBus> {
    return this.http.get<TrajetBus>(`${this.apiUrl}/${id}`);
  }

  ajouterTrajetBus(trajetBus: TrajetBus): Observable<TrajetBus> {
    return this.http.post<TrajetBus>(this.apiUrl, trajetBus);
  }

  supprimerTrajetBus(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getTrajetsByBusId(idBus: string): Observable<TrajetBus[]> {
    return this.http.get<TrajetBus[]>(`${this.apiUrl}/bus/${idBus}`);
  }

  getTrajetsByTrajetId(idTrajet: string): Observable<TrajetBus[]> {
    return this.http.get<TrajetBus[]>(`${this.apiUrl}/trajet/${idTrajet}`);
  }
}
