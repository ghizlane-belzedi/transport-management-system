package org.sop.user_service.DAO;

import org.sop.user_service.model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer> {

    // Trouver un utilisateur par son nom d'utilisateur
    Optional<Utilisateur> findByNomUtilisateur(String nomUtilisateur);

    // Trouver un utilisateur par son email
    Optional<Utilisateur> findByEmail(String email);

    // Trouver les utilisateurs par rôle
    List<Utilisateur> findByRole(String role);

    // Rechercher des utilisateurs dont le nom d'utilisateur contient une chaîne donnée
    List<Utilisateur> findByNomUtilisateurContaining(String keyword);

    // Rechercher des utilisateurs par CIN
    Optional<Utilisateur> findByCin(String cin);

    // Supprimer un utilisateur par son email
    void deleteByEmail(String email);

    // Supprimer un utilisateur par CIN
    void deleteByCin(String cin);
}
