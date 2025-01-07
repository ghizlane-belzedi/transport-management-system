import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusService } from 'src/app/services/bus.service';
import { TrajetService } from 'src/app/services/trajet.service';
import { TrajetBusService } from 'src/app/services/trajetbus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-assign-trajet-bus',
  templateUrl: './trajetbus.component.html',
  styleUrls: ['./trajetbus.component.css'],
})
export class AssignTrajetBusComponent implements OnInit {
  assignForm!: FormGroup;
  buses: any[] = []; // Liste des bus existants
  trajetsExistants: any[] = []; // Liste des trajets existants

  constructor(
    private fb: FormBuilder,
    private busService: BusService,
    private trajetService: TrajetService,
    private trajetBusService: TrajetBusService
  ) {}

  ngOnInit(): void {
    this.assignForm = this.fb.group({
      idBus: ['', Validators.required],
      trajets: this.fb.array([this.createTrajetGroup()]),
    });

    this.loadBuses();
    this.loadTrajetsExistants();
  }

  // Charger les bus existants
  loadBuses(): void {
    this.busService.getAllBuses().subscribe((buses) => {
      this.buses = buses;
    });
  }

  // Charger les trajets existants
  loadTrajetsExistants(): void {
    this.trajetService.getAllTrajets().subscribe((trajets) => {
      this.trajetsExistants = trajets;
    });
  }

  // Créer un groupe de formulaire pour un trajet
  createTrajetGroup(): FormGroup {
    return this.fb.group({
      idTrajet: ['', Validators.required],
    });
  }

  // Getter pour accéder à la liste des trajets
  get trajets() {
    return this.assignForm.get('trajets') as FormArray;
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
    if (this.assignForm.invalid) {
      this.assignForm.markAllAsTouched();
      return;
    }

    const formData = this.assignForm.value;

    // Affecter les trajets au bus
    formData.trajets.forEach((trajet: any) => {
      const trajetBusData = {
        idBus: formData.idBus,
        idTrajet: trajet.idTrajet,
      };

      this.trajetBusService.ajouterTrajetBus(trajetBusData).subscribe(
        () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Trajet affecté avec succès!',
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: "Erreur lors de l'affectation du trajet!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    });
  }
}
