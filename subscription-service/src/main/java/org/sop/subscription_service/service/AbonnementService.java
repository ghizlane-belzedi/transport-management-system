package org.sop.subscription_service.service;

import org.sop.subscription_service.dto.AbonnementDTO;
import org.sop.subscription_service.model.Abonnement;
import org.sop.subscription_service.model.TypePlan;
import org.sop.subscription_service.model.Utilisateur;
import org.sop.subscription_service.repository.AbonnementRepository;
import org.sop.subscription_service.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AbonnementService {

    @Autowired
    private AbonnementRepository abonnementRepository;

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    // Méthode pour récupérer les abonnements par utilisateur
    public List<AbonnementDTO> getAbonnementsByUtilisateur(Integer idUtilisateur) {
        return abonnementRepository.findByUtilisateurIdUtilisateur(idUtilisateur).stream()
                .map(abonnement -> {
                    AbonnementDTO dto = new AbonnementDTO();
                    dto.setIdAbonnement(abonnement.getIdAbonnement());
                    dto.setDateDebut(abonnement.getDateDebut());
                    dto.setDateFin(abonnement.getDateFin());
                    dto.setStatut(abonnement.getStatut());
                    dto.setTypePlan(abonnement.getTypePlan().name());
                    return dto;
                }).collect(Collectors.toList());
    }

    // Méthode de souscription
    public AbonnementDTO souscrireAbonnement(Integer idUtilisateur, String typePlan, Float prix, Integer duree) {
        // Vérifier si l'utilisateur existe
        Utilisateur utilisateur = utilisateurRepository.findById(idUtilisateur)
                .orElseThrow(() -> new IllegalArgumentException("Utilisateur introuvable"));

        // Créer un nouvel abonnement
        Abonnement abonnement = new Abonnement();
        abonnement.setUtilisateur(utilisateur);
        abonnement.setTypePlan(TypePlan.valueOf(typePlan));  // Supposons que TypePlan est un enum avec des types comme "BASIC", "PREMIUM"
        abonnement.setPrix(prix);
        abonnement.setDuree(duree);
        abonnement.setDateDebut(LocalDate.now());
        abonnement.setDateFin(LocalDate.now().plusMonths(duree)); // Exemple: la durée est en mois
        abonnement.setStatut("ACTIF");  // Statut par défaut

        // Sauvegarder l'abonnement dans la base de données
        abonnementRepository.save(abonnement);

        // Convertir l'abonnement en DTO pour le retour
        AbonnementDTO abonnementDTO = new AbonnementDTO();
        abonnementDTO.setIdAbonnement(abonnement.getIdAbonnement());
        abonnementDTO.setDateDebut(abonnement.getDateDebut());
        abonnementDTO.setDateFin(abonnement.getDateFin());
        abonnementDTO.setStatut(abonnement.getStatut());
        abonnementDTO.setTypePlan(abonnement.getTypePlan().name());

        return abonnementDTO;
    }
}
