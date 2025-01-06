export interface BusLocation {
    busNumber: string; // Numéro du bus (ex: "101", "Ligne 5")
    currentLocation: { // Position actuelle du bus
      latitude: number;
      longitude: number;
      timestamp: string; // Date et heure de la dernière mise à jour
    };
  }