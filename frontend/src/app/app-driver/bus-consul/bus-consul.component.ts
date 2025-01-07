import { Component, OnInit } from '@angular/core';
import { Bus } from 'src/app/models/buss.model';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-driver-dashboard',
  templateUrl: './bus-consul.component.html',
  styleUrls: ['./bus-consul.component.css'],
})
export class busconsul implements OnInit {
  busList: Bus[] = []; // Liste de tous les bus

  constructor(private busService: BusService) {}

  ngOnInit(): void {
    this.loadAllBuses();
  }

  // Charger tous les bus
  loadAllBuses(): void {
    this.busService.getAllBuses().subscribe({
      next: (buses) => {
        this.busList = buses;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des bus :', error);
      },
    });
  }
}
