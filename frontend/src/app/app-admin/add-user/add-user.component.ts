import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  // Define the form group
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Initialize the form
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

  // Getter for form controls
  get controls() {
    return this.userForm.controls;
  }

  // Submit method
  submit() {
    if (this.userForm.invalid) {
      console.error('Le formulaire est invalide');
      return;
    }

    const user: User = this.userForm.value;
    this.userService.addUser(user).subscribe(
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