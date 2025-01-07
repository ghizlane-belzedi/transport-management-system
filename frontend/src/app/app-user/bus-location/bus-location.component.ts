import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { BusLocation } from 'src/app/models/bus';
import { BusLocationService } from 'src/app/services/bus-location-service.service';

@Component({
  selector: 'app-bus-location', // Sélecteur du composant
  templateUrl: './bus-location.component.html', // Template HTML associé
  styleUrls: ['./bus-location.component.css'], // Fichiers CSS associés
})
export class BusLocationComponent implements OnInit, AfterViewInit {
  busId: string = ''; // Numéro du bus
  bus: BusLocation | null = null; // Informations du bus
  address: string = ''; // Adresse correspondant aux coordonnées
  private map: any; // Carte Leaflet
  private marker: L.Marker | null = null; // Marqueur pour la position du bus

  constructor(private busLocationService: BusLocationService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap(); // Initialiser la carte après que la vue est chargée
  }

  // Initialiser la carte Leaflet
  private initMap(): void {
    this.map = L.map('map').setView([36.8065, 10.1815], 13); // Centrez la carte sur une position par défaut (ex: Tunis)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);
  }

  // Ajouter un marqueur sur la carte
  private addMarker(
    latitude: number,
    longitude: number,
    popupText: string
  ): void {
    if (this.marker) {
      this.marker.remove(); // Supprimer l'ancien marqueur
    }
    this.marker = L.marker([latitude, longitude]).addTo(this.map);
    this.marker.bindPopup(popupText).openPopup();
    this.map.setView([latitude, longitude], 13); // Centrer la carte sur le nouveau marqueur
  }

  loadBusLocation(): void {
    if (!this.busId) {
      alert('Veuillez entrer un numéro de bus.');
      return;
    }

    this.busLocationService.getLocationsByBusId(this.busId).subscribe({
      next: (data: BusLocation[]) => {
        console.log('Données reçues :', data); // <-- Afficher les données dans la console

        // Vérifiez si le tableau contient des éléments
        if (data.length > 0) {
          const latestLocation = data[0]; // Prendre la première position
          this.bus = latestLocation;

          // Ajouter un marqueur pour le bus
          this.addMarker(
            latestLocation.latitude, // Accéder directement à la latitude
            latestLocation.longitude, // Accéder directement à la longitude
            `Bus: ${this.busId}`
          );

          // Récupérer l'adresse correspondant à la position du bus
          this.getAddress(latestLocation.latitude, latestLocation.longitude);
        } else {
          alert('Aucune position trouvée pour ce bus.');
        }
      },
      error: (err) => {
        console.error(
          'Erreur lors de la récupération de la position du bus:',
          err
        );
        alert('Bus non trouvé. Veuillez vérifier le numéro de bus.');
      },
    });
  }

  // Récupérer l'adresse à partir des coordonnées
  getAddress(latitude: number, longitude: number): void {
    this.busLocationService.getAddress(latitude, longitude).subscribe({
      next: (data) => {
        this.address = data;
        console.log('Adresse récupérée:', data);
      },
      error: (err) => {
        console.error("Erreur lors de la récupération de l'adresse:", err);
      },
    });
  }
}
