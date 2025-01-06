export interface User {
  id: number; // Optionnel car généré par le backend
  cin: string;
  nomUtilisateur: string;
  email: string;
  adresse?: string;
  telephone?: string;
  role: string;
  motDePasse: string;
}
