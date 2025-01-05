package org.sop.subscription_service.controller;

import org.sop.subscription_service.dto.AbonnementDTO;
import org.sop.subscription_service.dto.AbonnementRequest;
import org.sop.subscription_service.service.AbonnementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/abonnements")
public class AbonnementController {

    @Autowired
    private AbonnementService abonnementService;

    // Récupérer les abonnements d'un utilisateur
    @GetMapping("/{idUtilisateur}")
    public ResponseEntity<List<AbonnementDTO>> getAbonnementsByUtilisateur(@PathVariable Integer idUtilisateur) {
        return ResponseEntity.ok(abonnementService.getAbonnementsByUtilisateur(idUtilisateur));
    }

    @PostMapping("/souscrire")//pour admin
    public ResponseEntity<AbonnementDTO> souscrireAbonnement(
            @RequestBody AbonnementRequest abonnementRequest) {
        if (abonnementRequest.getIdUtilisateur() == null) {
            abonnementRequest.setIdUtilisateur(1);  // Valeur par défaut
        }
        // Appel au service pour créer l'abonnement
        AbonnementDTO abonnementDTO = abonnementService.souscrireAbonnement(
                abonnementRequest.getIdUtilisateur(),
                abonnementRequest.getTypePlan(),
                abonnementRequest.getPrix(),
                abonnementRequest.getDuree());
        return ResponseEntity.ok(abonnementDTO);  // Retourner les détails de l'abonnement créé
    }

}