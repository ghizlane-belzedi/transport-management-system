import { Trajet } from "./trajet";

export interface Horaire {
    idHoraire: string;
    idTrajet: string;
    heureDepart: string;
    heureArrivee: string;
    date: Date;
    trajet?: Trajet;
  }