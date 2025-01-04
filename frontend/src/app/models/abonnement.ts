export interface Abonnement {
  idAbonnement: string;
  dateDebut: Date;
  dateFin: Date;
  statut: string;
  typePlan: TypePlan;
  prix: number;
  duree: number;
  utilisateur: Utilisateur;
}

export enum TypePlan {
  MONTHLY = 'MONTHLY',
  ANNUAL = 'ANNUAL'
}

export interface Utilisateur {
  idUtilisateur: string;
  nom: string;
  email: string;
}