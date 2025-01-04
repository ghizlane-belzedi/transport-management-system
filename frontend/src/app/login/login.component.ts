import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userFormGroup!: FormGroup;
  errorMessage!: string;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Création du formulaire avec des validations
    this.userFormGroup = this.formBuilder.group({
      username: ['', Validators.required], // Validation du champ username
      password: ['', Validators.required], // Validation du champ password
    });
  }

  handleLogin() {
    if (this.userFormGroup.invalid) {
      this.errorMessage = 'Tous les champs sont obligatoires';
      return; // Ne pas procéder à la connexion si le formulaire est invalide
    }

    let username = this.userFormGroup.value.username;
    let password = this.userFormGroup.value.password;

    // Appel de la méthode de login dans le service d'authentification
    this.authenticationService.login(username, password).subscribe({
      next: (token) => {
        console.log('Connexion réussie, token JWT:', token); // Affichage du token dans la console
        this.authenticationService.authenticateUser(token); // Sauvegarde du token dans le localStorage
        this.router.navigateByUrl('/home'); // Redirection vers la page d'accueil après la connexion
      },
      error: (err) => {
        this.errorMessage = "Nom d'utilisateur ou mot de passe incorrect."; // Message d'erreur
        console.error('Erreur lors de la connexion:', err); // Affichage de l'erreur complète dans la console
      },
    });
  }
}
