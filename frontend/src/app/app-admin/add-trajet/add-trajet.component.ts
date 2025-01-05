import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trajet } from 'src/app/models/trajet';
import { MainService } from 'src/app/services/main';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-trajet',
  templateUrl: './add-trajet.component.html',
  styleUrls: ['./add-trajet.component.css']
})
export class AddTrajetComponent implements OnInit {

  trajetForm!: FormGroup;
  trajetId: string | null = null; // Handle null when no ID is present
  trajet: Trajet | null = null; // Ensure trajet is nullable
  isEditMode: boolean = false;

  constructor(
    private service: MainService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.trajetId = this.activatedRoute.snapshot.params['id'] || null;
    this.isEditMode = !!this.trajetId;

    if (this.isEditMode) {
      this.getTrajetById(this.trajetId!);
    } else {
      this.initForm();
    }
  }

  initForm(): void {
    this.trajetForm = this.formBuilder.group({
      depart: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      arrivee: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      duree: [null, [Validators.required, Validators.min(1)]],
      distance: [null, [Validators.required, Validators.min(1)]],
      horaires: [null], // Optional field for horaires
    });
  }

  getTrajetById(id: string): void {
    this.service.getTrajetById(id).subscribe({
      next: (trajet) => {
        this.trajet = trajet;
        this.initFormForUpdate();
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error fetching trajet!',
          text: 'Could not fetch trajet data. Please try again later.',
        });
        console.error(err);
      },
    });
  }

  initFormForUpdate(): void {
    if (this.trajet) {
      this.trajetForm.patchValue({
        depart: this.trajet.depart || '',
        arrivee: this.trajet.arrivee || '',
        duree: this.trajet.duree || null,
        distance: this.trajet.distance || null,
        horaires: this.trajet.horaires || null,
      });
    }
  }

  get controls() {
    return this.trajetForm.controls;
  }

  submit(): void {
    if (this.trajetForm.valid) {
      const trajetData: Trajet = this.trajetForm.value;
      this.isEditMode ? this.updateTrajet(trajetData) : this.addTrajet(trajetData);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Form!',
        text: 'Please fill out the form correctly before submitting.',
      });
    }
  }

  addTrajet(trajet: Trajet): void {
    this.service.addTrajet(trajet).subscribe({
      next: () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Trajet has been added successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['trajets']);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Error Adding Trajet!',
          text: 'Could not add the trajet. Please try again later.',
        });
        console.error(err);
      },
    });
  }

  updateTrajet(trajet: Trajet): void {
    if (this.trajetId) {
      this.service.updateTrajet(this.trajetId, trajet).subscribe({
        next: () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Trajet has been updated successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
          this.router.navigate(['trajets']);
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error Updating Trajet!',
            text: 'Could not update the trajet. Please try again later.',
          });
          console.error(err);
        },
      });
    }
  }
  
}
