import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userFormGroup!: FormGroup;
  errorMessage!: string;

  email : string = '';
  password : string = '';

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userFormGroup = this.formBuilder.group({
      username: this.formBuilder.control(""),
      password: this.formBuilder.control("")
    })
  }

  handleLogin() {
    let username = this.userFormGroup.value.username;
    let password = this.userFormGroup.value.password;
    this.authenticationService.login(username, password).subscribe({
      next: (appUser) => {
        this.authenticationService.authenticateUser(appUser).subscribe({
          next: (data) => {
            this.router.navigateByUrl("/home");
          }
        });
      },
      error: (err) => {
        this.errorMessage = err;
      }
    })
  }

  OnUserLogin() {
    if (this.email === '') {
      alert('Veuillez entrer votre email.');
      return;
    }
  
    if (this.password === '') {
      alert('Veuillez entrer votre mot de passe.');
      return;
    }
  
    this.authenticationService.login(this.email, this.password).subscribe({
      next: (appUser) => {
        this.authenticationService.authenticateUser(appUser).subscribe({
          next: (data) => {
            this.router.navigateByUrl("/home"); // Redirect to the home page
          },
          error: (err) => {
            this.errorMessage = 'Erreur lors de l\'authentification. Veuillez réessayer.';
          }
        });
      },
      error: (err) => {
        this.errorMessage = 'Email ou mot de passe incorrect.';
      }
    });
  
    this.email = '';
    this.password = '';
  }
  OnSignInWithGoogle(){
    this.authenticationService.googleSignIn();
  }
}
