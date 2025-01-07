import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusLocation } from '../models/bus';

@Injectable({
  providedIn: 'root',
})
export class BusLocationService {
  private apiUrl = 'http://localhost:8080/api/bus-location'; // URL du backend

  constructor(private http: HttpClient) {}

  // Enregistrer la position d'un bus
  saveLocation(busId: string, latitude: number, longitude: number): Observable<BusLocation> {
    return this.http.post<BusLocation>(`${this.apiUrl}/save`, null, {
      params: { busId, latitude: latitude.toString(), longitude: longitude.toString() },
    });
  }

  // Récupérer les positions d'un bus
  getLocationsByBusId(busId: string): Observable<BusLocation[]> {
    return this.http.get<BusLocation[]>(`${this.apiUrl}/locations/${busId}`);
  }

  // Récupérer l'adresse à partir des coordonnées
  getAddress(latitude: number, longitude: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/address`, {
      params: { latitude: latitude.toString(), longitude: longitude.toString() },
    });
  }
}