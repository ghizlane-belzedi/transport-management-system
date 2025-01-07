export interface TrajetBus {
  id?: string; // Identifiant MongoDB (optionnel, car il peut être généré côté backend)
  idBus: string; // Identifiant du bus
  idTrajet: string; // Identifiant du trajet
}
