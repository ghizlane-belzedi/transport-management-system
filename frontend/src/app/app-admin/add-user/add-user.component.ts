import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.sevice';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: 'add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  users: User[] = []; // Liste des utilisateurs

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadUsers(); // Charger la liste des utilisateurs au démarrage
  }

  // Initialiser le formulaire
  initializeForm() {
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

  // Getter pour les contrôles du formulaire
  get controls() {
    return this.userForm.controls;
  }

  // Soumettre le formulaire
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
        this.loadUsers(); // Recharger la liste des utilisateurs après l'ajout
        this.userForm.reset(); // Réinitialiser le formulaire
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

  // Charger la liste des utilisateurs
  loadUsers() {
    this.userService.getUsers().subscribe(
      (users: User[]) => {
        this.users = users;
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des utilisateurs:',
          error
        );
      }
    );
  }
  // Supprimer un utilisateur
  deleteUser(nomUtilisateur: string) {
    Swal.fire({
      title: 'Êtes-vous sûr?',
      text: 'Vous ne pourrez pas revenir en arrière!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Oui, supprimer!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(nomUtilisateur).subscribe(
          () => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Utilisateur supprimé avec succès!',
              showConfirmButton: false,
              timer: 1500,
            });
            this.loadUsers(); // Recharger la liste des utilisateurs après la suppression
          },
          (error) => {
            console.error("suppression reussite de l'utilisateur:", error);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Utilisateur supprimé avec succès!',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );
      }
    });
  }
}
