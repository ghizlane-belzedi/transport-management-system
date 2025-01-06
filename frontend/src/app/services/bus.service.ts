// bus.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from '../models/buss.module';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private apiUrl = 'https://votre-api.com/bus'; // URL de l'API

  constructor(private http: HttpClient) {}

  // Récupérer les bus assignés à un conducteur
  getBusesByDriverId(driverId: string): Observable<Bus[]> {
    return this.http.get<Bus[]>(`${this.apiUrl}?driverId=${driverId}`);
  }
}