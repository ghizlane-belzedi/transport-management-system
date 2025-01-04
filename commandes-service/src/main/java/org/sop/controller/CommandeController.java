package org.sop.controller;


import org.sop.module.Commande;
import org.sop.service.CommandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/commandes")
public class CommandeController {

    @Autowired
    private CommandeService commandeService;

    @PostMapping
    public ResponseEntity<Commande> creerCommande(@RequestBody Commande commande) {
        Commande nouvelleCommande = commandeService.creerCommande(commande);
        return ResponseEntity.ok(nouvelleCommande);
    }

    @GetMapping("/{idUtilisateur}")
    public ResponseEntity<List<Commande>> listerCommandesUtilisateur(@PathVariable String idUtilisateur) {
        return ResponseEntity.ok(commandeService.listerCommandesUtilisateur(idUtilisateur));
    }

    @PutMapping("/{idCommande}/ajouter-ticket/{idTicket}")
    public ResponseEntity<Commande> ajouterTicket(@PathVariable String idCommande, @PathVariable String idTicket) {
        Commande commande = commandeService.ajouterTicket(idCommande, idTicket);
        return ResponseEntity.ok(commande);
    }
}
