import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import jwt_decode from 'jwt-decode'; // Décodage explicite
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userFormGroup!: FormGroup;
  errorMessage!: string;
  role!: string; // Rôle transmis via l'URL

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtenir le rôle depuis les paramètres de l'URL
    this.route.queryParams.subscribe((params) => {
      this.role = params['role'];
    });

    this.userFormGroup = this.formBuilder.group({
      username: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
    });
  }

  handleLogin() {
    if (this.userFormGroup.invalid) {
      this.errorMessage = 'Tous les champs sont obligatoires.';
      return;
    }

    const username = this.userFormGroup.value.username;
    const password = this.userFormGroup.value.password;

    this.authenticationService.login(username, password).subscribe({
      next: (token) => {
        console.log('Connexion réussie, token JWT:', token);

        // Sauvegarde du token
        this.authenticationService.authenticateUser(token);

        try {
          // Décodage du JWT
          //const decodedToken: any = jwt_decode(token);

          // Utiliser le rôle transmis dans l'URL si présent
          //const roleFromToken = decodedToken.role;
          const roleToUse = this.role; //|| roleFromToken;

          // Redirection basée sur le rôle
          if (roleToUse === 'USER') {
            this.router.navigateByUrl('/user');
          } else if (roleToUse === 'DRIVER') {
            this.router.navigateByUrl('/driver');
          } else if (roleToUse === 'ADMIN') {
            this.router.navigateByUrl('/admin');
          } else {
            this.errorMessage =
              "Rôle non reconnu. Veuillez contacter l'administrateur.";
          }
        } catch (err) {
          console.error('Erreur lors du décodage du token:', err);
          this.errorMessage = 'Erreur lors du décodage du token.';
        }
      },
      error: (err) => {
        this.errorMessage = "Nom d'utilisateur ou mot de passe incorrect.";
        console.error('Erreur lors de la connexion:', err);
      },
    });
  }
}
