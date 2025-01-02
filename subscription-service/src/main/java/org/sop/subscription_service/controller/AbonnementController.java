package org.sop.subscription_service.controller;

import java.util.List;

import org.sop.subscription_service.dto.AbonnementDTO;
import org.sop.subscription_service.service.AbonnementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/abonnements")
public class AbonnementController {

    @Autowired
    private AbonnementService abonnementService;

    @GetMapping("/{idUtilisateur}")
    public ResponseEntity<List<AbonnementDTO>> getAbonnementsByUtilisateur(@PathVariable Integer idUtilisateur) {
        return ResponseEntity.ok(abonnementService.getAbonnementsByUtilisateur(idUtilisateur));
    }
}
