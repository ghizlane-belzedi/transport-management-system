import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusService } from 'src/app/services/bus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-bus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css'],
})
export class AddBussComponent implements OnInit {
  busForm!: FormGroup;

  constructor(private fb: FormBuilder, private busService: BusService) {}

  ngOnInit(): void {
    this.busForm = this.fb.group({
      numero: ['', Validators.required],
      capacite: ['', [Validators.required, Validators.min(1)]],
      etat: ['', Validators.required],
    });
  }

  // Soumettre le formulaire
  submit(): void {
    if (this.busForm.invalid) {
      this.busForm.markAllAsTouched();
      return;
    }

    const busData = this.busForm.value;

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
