import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utilisateur } from 'src/app/models/abonnement';
import { AbonnementService } from 'src/app/services/abonnement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'add-abon.component',
  templateUrl: './add-abon.component.html',
  styleUrls: ['./add-abon.component.css'],
})
export class AbonnementFormComponent implements OnInit {
  abonnementForm!: FormGroup;
  isEditMode = false; // Mode édition ou ajout
  utilisateurs: Utilisateur[] = []; // Liste des utilisateurs
  abonnementId: string | null = null; // ID de l'abonnement en mode édition

  constructor(
    private fb: FormBuilder,
    private abonnementService: AbonnementService // Injectez le service
  ) {}

  ngOnInit(): void {
    this.abonnementForm = this.fb.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      statut: ['ACTIVE', Validators.required],
      typePlan: ['MENSUEL', Validators.required],
      prix: [null, [Validators.required, Validators.min(0)]],
      duree: [null, [Validators.required, Validators.min(1)]],
      utilisateur: ['', Validators.required],
    });

    // Chargez la liste des utilisateurs
    this.loadUtilisateurs();

    // Si en mode édition, chargez les données de l'abonnement
    if (this.isEditMode && this.abonnementId) {
      this.loadAbonnement(this.abonnementId);
    }
  }

  get controls() {
    return this.abonnementForm.controls;
  }

  submit() {
    if (this.abonnementForm.invalid) {
      console.error('Le formulaire est invalide');
      return;
    }

    const abonnement = this.abonnementForm.value;
    console.log("Données de l'abonnement:", abonnement);

    if (this.isEditMode && this.abonnementId) {
      // Mettre à jour l'abonnement existant
      this.abonnementService
        .updateAbonnement(this.abonnementId, abonnement)
        .subscribe(
          (response) => {
            console.log('Abonnement mis à jour :', response);
          },
          (error) => {
            console.error('Erreur lors de la mise à jour :', error);
          }
        );
    } else {
      // Ajouter un nouvel abonnement
      this.abonnementService.addAbonnement(abonnement).subscribe(
        (response) => {
          console.log('Abonnement ajouté :', response);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Abonnement ajouté avec succès!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.error("Erreur lors de l'ajout :", error);
          alert("Erreur lors de l'ajout de l'abonnement.");
        }
      );
    }
  }

  loadAbonnement(id: string) {
    this.abonnementService.getAbonnementById(id).subscribe(
      (abonnement) => {
        this.abonnementForm.patchValue(abonnement); // Remplissez le formulaire avec les données de l'abonnement
      },
      (error) => {
        console.error("Erreur lors du chargement de l'abonnement :", error);
      }
    );
  }

  loadUtilisateurs() {
    this.abonnementService.getUtilisateurs().subscribe(
      (utilisateurs) => {
        this.utilisateurs = utilisateurs;
      },
      (error) => {
        console.error('Erreur lors du chargement des utilisateurs :', error);
      }
    );
  }
}
