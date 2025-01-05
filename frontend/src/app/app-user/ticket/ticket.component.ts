import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-acheter-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  ticketForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router
  ) {
    this.ticketForm = this.fb.group({
      trajetId: ['', Validators.required],
      montant: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.ticketForm.valid) {
      const ticket: Ticket = {
        id: '', // Généré côté serveur
        userId: '123', // Remplacez par l'ID de l'utilisateur connecté
        trajetId: this.ticketForm.value.trajetId,
        dateTicket: new Date(),
        montant: this.ticketForm.value.montant,
      };

      this.ticketService.acheterTicket(ticket).subscribe({
        next: (response) => {
          console.log('Ticket acheté avec succès:', response);
          this.router.navigate(['/mes-tickets']); // Redirige vers la page des tickets
        },
        error: (err) => {
          console.error('Erreur lors de l\'achat du ticket:', err);
        },
      });
    }
  }
}