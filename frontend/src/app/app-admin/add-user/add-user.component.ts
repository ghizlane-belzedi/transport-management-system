import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilisateurService } from 'src/app/services/user.sevice';
import Swal from 'sweetalert2';

@Component({
  selector: 'add-user.component',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private utilisateurService: UtilisateurService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      cin: ['', Validators.required],
      nomUtilisateur: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse: [''],
      telephone: [''],
      role: ['USER', Validators.required],
      motDePasse: ['', Validators.required],
    });
  }

  get controls() {
    return this.userForm.controls;
  }

  submit() {
    if (this.userForm.invalid) {
      console.error('Le formulaire est invalide');
      return;
    }

    const user = this.userForm.value;
    this.utilisateurService.addUtilisateur(user).subscribe(
      (response) => {
        console.log('Utilisateur ajouté :', response);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Utilisateur ajouté avec succès!',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        console.error("Erreur lors de l'ajout de l'utilisateur:", error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: "Erreur lors de l'ajout!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
