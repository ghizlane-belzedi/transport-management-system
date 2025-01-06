import {Injectable} from '@angular/core';
// @ts-ignore
import * as uuid from "uuid";
import {Observable, of, throwError} from "rxjs";
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users: User[] = [];
  authenticatedUser: User | undefined;

  constructor() {
    this.users.push({
      cin: "cd753202", nomUtilisateur: "fatima zhr", motDePasse: "1234",
      email: '',
      role: ''
    })
  }

  public login(nomUtilisateur: string, motDePasse: string): Observable<User> {
    let appUser = this.users.find(u => u.nomUtilisateur == nomUtilisateur);
    if (!appUser) return throwError(() => new Error("User not found"));
    if (appUser.motDePasse != motDePasse) return throwError(() => new Error("Bad Credentials"));
    return of(appUser);
  }

  public authenticateUser(appUser: User): Observable<boolean> {
    this.authenticatedUser = appUser;
    localStorage.setItem("authUser", JSON.stringify({
      username: appUser.nomUtilisateur,
      motDePasse: appUser.motDePasse,
      jwt: "JWT_TOKEN"
    }))
    return of(true);
  }

  public isAuthenticated(){
    return this.authenticatedUser!=undefined;
  }

  public logout(): Observable<boolean>{
    this.authenticatedUser=undefined;
    localStorage.removeItem("authUser");
    return of(true);
  }

  //sign in with google
  googleSignIn() {
    /*
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/dashboard']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
      this.OnShowRegistrationSuccess();

    }, err => {
      this.OnShowRegistrationWarning();
    })
    
  }*/
}
public getCurrentUserRole(): string | undefined {
  const authUser = localStorage.getItem("authUser");
  if (authUser) {
    const user = JSON.parse(authUser);
    return user.role;
  }
  return undefined;
}}
