export interface User {
  cin: string;
  nomUtilisateur: string;
  email: string;
  adresse?: string;
  telephone?: string;
  role: string;
  motDePasse: string;
}