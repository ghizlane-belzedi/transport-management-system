// add-bus.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Trajet } from 'src/app/models/trajet';
import { TrajetService } from 'src/app/services/trajet.service';


@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {
  busForm!: FormGroup;
  isEditMode = false; // Mode édition ou ajout
  trajetsExistants: Trajet[] = []; // Liste des trajets existants

  constructor(private fb: FormBuilder, private trajetService: TrajetService) {}

  ngOnInit(): void {
    this.busForm = this.fb.group({
      numero: ['', Validators.required],
      capacite: ['', [Validators.required, Validators.min(1)]],
      etat: ['', Validators.required],
      trajets: this.fb.array([]) // Liste des trajets (IDs seulement)
    });

    // Charger les trajets existants
    this.loadTrajetsExistants();
  }

  // Charger les trajets existants depuis le service
  loadTrajetsExistants(): void {
    this.trajetService.getTrajets().subscribe((trajets) => {
      this.trajetsExistants = trajets;
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

  // Ajouter un trajet (ID seulement)
  addTrajet(): void {
    const trajetForm = this.fb.group({
      idTrajet: ['', Validators.required] // Champ pour l'ID du trajet
    });
    this.trajets.push(trajetForm);
  }

  // Supprimer un trajet
  removeTrajet(index: number): void {
    this.trajets.removeAt(index);
  }

  // Soumettre le formulaire
  submit(): void {
    if (this.busForm.invalid) {
      this.busForm.markAllAsTouched();
      return;
    }
    console.log('Bus à ajouter/mettre à jour :', this.busForm.value);
    // Ici, vous pouvez appeler un service pour envoyer les données au backend
  }
}