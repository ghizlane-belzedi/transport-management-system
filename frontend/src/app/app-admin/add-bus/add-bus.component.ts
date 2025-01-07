import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trajet } from 'src/app/models/trajet';
import { BusService } from 'src/app/services/bus.service';
import { TrajetService } from 'src/app/services/trajet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css'],
})
export class AddBusComponent implements OnInit {
  busForm!: FormGroup;
  isEditMode = false; // Mode édition ou ajout
  trajetsExistants: Trajet[] = []; // Liste des trajets existants

  constructor(
    private fb: FormBuilder,
    private trajetService: TrajetService,
    private busService: BusService
  ) {}

  ngOnInit(): void {
    this.busForm = this.fb.group({
      numero: ['', Validators.required],
      capacite: ['', [Validators.required, Validators.min(1)]],
      etat: ['', Validators.required],
      trajets: this.fb.array([this.createTrajetGroup()]), // Ajouter un FormGroup par défaut
    });
    this.loadTrajetsExistants();
  }

  createTrajetGroup(): FormGroup {
    return this.fb.group({
      idTrajet: ['', Validators.required], // Champ pour l'ID du trajet
    });
  }
  // Charger les trajets existants depuis le service
  loadTrajetsExistants(): void {
    this.trajetService.getAllTrajets().subscribe((trajets) => {
      this.trajetsExistants = trajets;
      this.addTrajet(); // Ajouter un trajet par défaut après le chargement
    });
  }

  // Getter pour accéder aux contrôles du formulaire
  get controls() {
    return this.busForm.controls;
  }

  // Getter pour accéder à la liste des trajets
  get trajets() {
    return this.busForm.get('trajets') as FormArray;
  }

  // Ajouter un trajet
  addTrajet(): void {
    const trajetGroup = this.createTrajetGroup();
    this.trajets.push(trajetGroup);
  }

  // Supprimer un trajet
  removeTrajet(index: number): void {
    if (this.trajets.length > 1) {
      this.trajets.removeAt(index);
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Attention',
        text: 'Vous ne pouvez pas supprimer le dernier trajet.',
      });
    }
  }

  // Soumettre le formulaire
  submit(): void {
    if (this.busForm.invalid) {
      this.busForm.markAllAsTouched();
      return;
    }

    const busData = this.busForm.value;

    if (this.isEditMode) {
      // Mettre à jour l'état du bus
      this.busService.updateBusState(busData.numero, busData.etat).subscribe(
        () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'État du bus mis à jour avec succès!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: "Erreur lors de la mise à jour de l'état du bus!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    } else {
      // Ajouter un nouveau bus
      this.busService.addBus(busData).subscribe(
        (response) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bus ajouté avec succès!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.busForm.reset(); // Réinitialiser le formulaire
        },
        (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: "Erreur lors de l'ajout du bus!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    }
  }
}
