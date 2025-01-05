import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userFormGroup!: FormGroup;
  errorMessage!: string;
  role!: string; // Role parameter from the query string

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get the role from the query parameters
    this.route.queryParams.subscribe(params => {
      this.role = params['role'];
    });

    this.userFormGroup = this.formBuilder.group({
      username: this.formBuilder.control(""),
      password: this.formBuilder.control("")
    });
  }

  handleLogin() {
    let username = this.userFormGroup.value.username;
    let password = this.userFormGroup.value.password;
    this.authService.login(username, password).subscribe({
      next: (appUser) => {
        this.authService.authenticateUser(appUser).subscribe({
          next: (data) => {
            // Redirect based on the role parameter
            if (this.role === 'USER') {
              this.router.navigateByUrl("/app-user");
            } else if (this.role === 'DRIVER') {
              this.router.navigateByUrl("/app-driver");
            } else if (this.role === 'ADMIN') {
              this.router.navigateByUrl("/app-admin");
            } else {
              this.errorMessage = 'Rôle non reconnu. Veuillez contacter l\'administrateur.';
            }
          },
          error: (err) => {
            this.errorMessage = 'Erreur lors de l\'authentification. Veuillez réessayer.';
          }
        });
      },
      error: (err) => {
        this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect.';
      }
    });
  }
  OnSignInWithGoogle(){
    this.authService.googleSignIn();
  }
}