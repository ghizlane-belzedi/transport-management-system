package org.sop.user_service.controller;// UtilisateurController.java
import org.sop.user_service.DTO.UtilisateurDTO;
import org.sop.user_service.model.Utilisateur;
import org.sop.user_service.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/utilisateurs")
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    @PostMapping("/inscrire")
    public ResponseEntity<UtilisateurDTO> inscrire(@RequestBody UtilisateurDTO utilisateurDTO) {
        UtilisateurDTO utilisateurCree = utilisateurService.inscrire(utilisateurDTO);
        return ResponseEntity.ok(utilisateurCree);
    }

    @PostMapping("/connexion")
    public ResponseEntity<String> connexion(@RequestParam String nomUtilisateur, @RequestParam String motDePasse) {
        Optional<Utilisateur> utilisateur = utilisateurService.connexion(nomUtilisateur, motDePasse);
        if (((Optional<?>) utilisateur).isPresent()) {
            // Générer un token JWT ici et le retourner
            String token = "token_placeholder"; // Remplacer par le code pour générer le JWT
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(401).body("Nom d'utilisateur ou mot de passe incorrect");
        }
    }
}
