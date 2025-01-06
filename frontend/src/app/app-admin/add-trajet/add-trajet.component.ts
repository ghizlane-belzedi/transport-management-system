import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trajet } from 'src/app/models/trajet';
import { MainService } from 'src/app/services/main';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-trajet',
  templateUrl: './add-trajet.component.html',
  styleUrls: ['./add-trajet.component.css'],
})
export class AddTrajetComponent implements OnInit {
  trajetForm!: FormGroup;
  trajetId: string | null = null;
  trajet: Trajet | null = null;
  isEditMode: boolean = false;

  constructor(
    private service: MainService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Récupération de l'ID pour le mode édition
    this.trajetId = this.activatedRoute.snapshot.params['id'] || null;
    this.isEditMode = !!this.trajetId;

    if (this.isEditMode) {
      this.getTrajetById(this.trajetId!);
    } else {
      this.initForm();
    }
  }

  // Initialisation du formulaire pour l'ajout
  initForm(): void {
    this.trajetForm = this.formBuilder.group({
      idTrajet: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      depart: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      arrivee: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(30),
        ],
      ],
      duree: [null, [Validators.required, Validators.min(1)]],
      distance: [null, [Validators.required, Validators.min(1)]],
      horaires: [null], // Optionnel
    });
  }

  // Récupération d'un trajet par son ID
  getTrajetById(id: string): void {
    this.service.getTrajetById(id).subscribe({
      next: (trajet) => {
        this.trajet = trajet;
        this.initFormForUpdate();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Erreur!',
          text: 'Impossible de récupérer les données du trajet.',
        });
        console.error('Erreur lors de la récupération du trajet :', err);
      },
    });
  }

  // Préparer le formulaire pour la mise à jour
  initFormForUpdate(): void {
    if (this.trajet) {
      this.trajetForm.patchValue({
        idTrajet: this.trajet.idTrajet || '',
        depart: this.trajet.depart || '',
        arrivee: this.trajet.arrivee || '',
        duree: this.trajet.duree || null,
        distance: this.trajet.distance || null,
        horaires: this.trajet.horaires || null,
      });
    }
  }

  // Getter pour les contrôles du formulaire
  get controls() {
    return this.trajetForm.controls;
  }

  // Validation et soumission du formulaire
  submit(): void {
    if (this.trajetForm.valid) {
      const trajetData: Trajet = this.trajetForm.value;
      this.isEditMode
        ? this.updateTrajet(trajetData)
        : this.addTrajet(trajetData);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Formulaire invalide!',
        text: 'Veuillez corriger les erreurs avant de soumettre.',
      });
    }
  }

  // Ajouter un trajet
  addTrajet(trajet: Trajet): void {
    this.service.addTrajet(trajet).subscribe({
      next: () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Trajet ajouté avec succès!',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['trajets']);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: "Erreur lors de l'ajout!",
          text: 'Veuillez réessayer plus tard.',
        });
        console.error("Erreur lors de l'ajout du trajet :", err);
      },
    });
  }

  // Mettre à jour un trajet
  updateTrajet(trajet: Trajet): void {
    if (this.trajetId) {
      this.service.updateTrajet(this.trajetId, trajet).subscribe({
        next: () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Trajet mis à jour avec succès!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['trajets']);
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Erreur de mise à jour!',
            text: 'Veuillez réessayer plus tard.',
          });
          console.error('Erreur lors de la mise à jour du trajet :', err);
        },
      });
    }
  }
}
