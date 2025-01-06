// driver-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Bus } from 'src/app/models/buss.module';
import { BusService } from 'src/app/services/bus.service';


@Component({
  selector: 'app-driver-dashboard',
  templateUrl: './bus-consul.component.html',
  styleUrls: ['./bus-consul.component.css']
})
export class busconsul implements OnInit {
  busList: Bus[] = []; // Liste des bus assignés au conducteur

  constructor(private busService: BusService) {}

  ngOnInit(): void {
    this.loadDriverBuses();
  }

  // Charger les bus assignés au conducteur
  loadDriverBuses(): void {
    // Remplacez "driverId" par l'ID du conducteur connecté
    const driverId = '123'; // Exemple d'ID de conducteur
    this.busService.getBusesByDriverId(driverId).subscribe({
      next: (buses) => {
        this.busList = buses;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des bus :', error);
      }
    });
  }
}