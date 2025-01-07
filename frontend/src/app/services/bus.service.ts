// bus.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from '../models/buss.model';

@Injectable({
  providedIn: 'root',
})
export class BusService {
  private apiUrl = 'http://localhost:8181/bus'; // URL de l'API backend

  constructor(private http: HttpClient) {}

  // Récupérer tous les bus
  getAllBuses(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.apiUrl);
  }

  // Ajouter un nouveau bus
  addBus(bus: Bus): Observable<Bus> {
    return this.http.post<Bus>(this.apiUrl, bus);
  }

  // Mettre à jour l'état d'un bus
  updateBusState(id: string, nouvelEtat: string): Observable<void> {
    const url = `${this.apiUrl}/${id}/etat`;
    return this.http.put<void>(url, null, { params: { nouvelEtat } });
  }

  // Supprimer un bus
  deleteBus(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
