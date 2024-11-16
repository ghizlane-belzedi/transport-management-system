package org.sop.user_service.controller;

import org.sop.user_service.DTO.UtilisateurDTO;
import org.sop.user_service.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/utilisateurs")
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    // Inscription d'un utilisateur
    @PostMapping("/inscrire")
    public ResponseEntity<UtilisateurDTO> inscrire(@RequestBody UtilisateurDTO utilisateurDTO) {
        UtilisateurDTO utilisateurCree = utilisateurService.inscrire(utilisateurDTO);
        return ResponseEntity.ok(utilisateurCree);
    }

    // Connexion d'un utilisateur
    @PostMapping("/connexion")
    public ResponseEntity<String> connexion(@RequestParam String nomUtilisateur, @RequestParam String motDePasse) {
        Optional<UtilisateurDTO> utilisateur = utilisateurService.connexion(nomUtilisateur, motDePasse);
        if (utilisateur.isPresent()) {
            // Générer un token JWT ici et le retourner
            String token = "token_placeholder"; // Remplacer par un vrai générateur de JWT
            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(401).body("Nom d'utilisateur ou mot de passe incorrect");
        }
    }

    // Obtenir tous les utilisateurs
    @GetMapping
    public ResponseEntity<List<UtilisateurDTO>> obtenirTousLesUtilisateurs() {
        List<UtilisateurDTO> utilisateurs = utilisateurService.obtenirTousLesUtilisateurs();
        return ResponseEntity.ok(utilisateurs);
    }

    // Obtenir un utilisateur par son ID
    @GetMapping("/{id}")
    public ResponseEntity<UtilisateurDTO> obtenirUtilisateurParId(@PathVariable int id) {
        Optional<UtilisateurDTO> utilisateur = utilisateurService.trouverParNomUtilisateur(String.valueOf(id));
        return utilisateur.map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(404).body(null));
    }

    // Ajouter un utilisateur
    @PostMapping
    public ResponseEntity<UtilisateurDTO> ajouterUtilisateur(@RequestBody UtilisateurDTO utilisateurDTO) {
        UtilisateurDTO utilisateurCree = utilisateurService.ajouterUtilisateur(utilisateurDTO);
        return ResponseEntity.ok(utilisateurCree);
    }

    // Modifier un utilisateur
    @PutMapping("/{id}")
    public ResponseEntity<UtilisateurDTO> modifierUtilisateur(@PathVariable int id, @RequestBody UtilisateurDTO utilisateurDTO) {
        try {
            UtilisateurDTO utilisateurMisAJour = utilisateurService.modifierUtilisateur(id, utilisateurDTO);
            return ResponseEntity.ok(utilisateurMisAJour);
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(null);
        }
    }

    // Supprimer un utilisateur
    @DeleteMapping("/{id}")
    public ResponseEntity<String> supprimerUtilisateur(@PathVariable int id) {
        try {
            utilisateurService.supprimerUtilisateur(id);
            return ResponseEntity.ok("Utilisateur supprimé avec succès");
        } catch (RuntimeException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        }
    }
}
