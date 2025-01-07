import { Trajet } from './trajet';

export interface Bus {
  idBus: string;
  numero: string;
  capacite: number;
  etat: string;
  trajets: Trajet[];
}
