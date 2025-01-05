import { Component, OnInit } from '@angular/core';
import { Trajet } from 'src/app/models/trajet';
import { TrajetService } from 'src/app/services/trajet.service';

@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.css'],
})
export class TrajetComponent implements OnInit {
  trajets: Trajet[] = []; // Liste des trajets

  constructor(private trajetService: TrajetService) {}

  ngOnInit(): void {
    this.loadTrajets(); // Charger les trajets au démarrage
  }

  // Charger les trajets
  loadTrajets(): void {
    this.trajetService.getTrajets().subscribe({
      next: (data: Trajet[]) => {
        this.trajets = data;
        console.log('Trajets récupérés:', data);
      },
      error: (err: any) => {
        console.error('Erreur lors de la récupération des trajets:', err);
      },
    });
  }
}