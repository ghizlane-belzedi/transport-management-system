// abonnement-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Abonnement, Utilisateur } from 'src/app/models/abonnement';
import { AbonnementService } from 'src/app/services/abonnement.service';
// Importez les interfaces

@Component({
  selector: 'add-abon.component',
  templateUrl: './add-abon.component.html',
  styleUrls: ['./add-abon.component.css']
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
      typePlan: ['MONTHLY', Validators.required],
      prix: [null, [Validators.required, Validators.min(0)]],
      duree: [null, [Validators.required, Validators.min(1)]],
      utilisateur: ['', Validators.required]
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
      return;
    }

    const abonnement: Abonnement = this.abonnementForm.value;

    if (this.isEditMode && this.abonnementId) {
      // Mettre à jour l'abonnement existant
      this.abonnementService.updateAbonnement(this.abonnementId, abonnement).subscribe(
        (response) => {
          console.log('Abonnement mis à jour :', response);
          // Redirigez ou affichez un message de succès
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
          // Redirigez ou affichez un message de succès
        },
        (error) => {
          console.error('Erreur lors de l\'ajout :', error);
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
        console.error('Erreur lors du chargement de l\'abonnement :', error);
      }
    );
  }

  loadUtilisateurs() {
    // Simulez un chargement d'utilisateurs (remplacez par un appel API si nécessaire)
    this.utilisateurs = [
      { idUtilisateur: '1', nom: 'tima', email: 'tima@example.com' },
      { idUtilisateur: '2', nom: 'flower', email: 'hfrag@example.com' }
    ];
  }
}