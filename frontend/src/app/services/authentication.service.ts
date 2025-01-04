import {Injectable} from '@angular/core';
// @ts-ignore
import * as uuid from "uuid";
import {Observable, of, throwError} from "rxjs";
import { AppUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users: AppUser[] = [];
  authenticatedUser: AppUser | undefined;

  constructor() {
    this.users.push({userId: uuid.v4(), username: "fatima zhr", password: "1234"})
  }

  public login(username: string, password: string): Observable<AppUser> {
    let appUser = this.users.find(u => u.username == username);
    if (!appUser) return throwError(() => new Error("User not found"));
    if (appUser.password != password) return throwError(() => new Error("Bad Credentials"));
    return of(appUser);
  }

  public authenticateUser(appUser: AppUser): Observable<boolean> {
    this.authenticatedUser = appUser;
    localStorage.setItem("authUser", JSON.stringify({
      username: appUser.username,
      password: appUser.password,
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
}}
