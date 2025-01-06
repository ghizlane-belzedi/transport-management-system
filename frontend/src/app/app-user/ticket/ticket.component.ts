import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { AuthenticationService } from 'src/app/services/authentication.service';
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
    private authService: AuthenticationService, // Service d'authentification
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
      const userId = this.authService.getUserId(); // Récupérer l'ID utilisateur
      if (!userId) {
        alert('Utilisateur non authentifié.');
        return;
      }

      const ticket: Ticket = {
        id: '', // Généré côté serveur
        userId: userId, // Utiliser l'ID récupéré
        trajetId: this.ticketForm.value.trajetId,
        dateTicket: new Date(),
        montant: this.ticketForm.value.montant,
      };

      this.ticketService.acheterTicket(ticket).subscribe({
        next: (response) => {
          console.log('Ticket acheté avec succès:', response);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error("Erreur lors de l'achat du ticket:", err);
        },
      });
    }
  }
}
