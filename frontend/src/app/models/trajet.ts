import { Horaire } from "./horaire";

export interface Trajet {
    idTrajet: string;
    depart: string;
    arrivee: string;
    duree: number;
    distance: number;
    horaires?: Horaire[];
  }