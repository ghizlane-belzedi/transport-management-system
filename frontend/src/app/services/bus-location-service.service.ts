import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusLocation } from '../models/bus';

@Injectable({
  providedIn: 'root',
})
export class BusLocationService {
  private apiUrl = 'http://localhost:8080/api/buses'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  // Récupérer la position d'un bus par son numéro
  getBusLocation(busNumber: string): Observable<BusLocation> {
    return this.http.get<BusLocation>(`${this.apiUrl}/${busNumber}`);
  }

  // Récupérer l'adresse à partir des coordonnées (via le backend qui utilise OSM)
  getAddress(latitude: number, longitude: number): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/address?lat=${latitude}&lon=${longitude}`);
  }
}