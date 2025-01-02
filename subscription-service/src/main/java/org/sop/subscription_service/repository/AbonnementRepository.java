package org.sop.subscription_service.repository;

import java.util.List;

import org.sop.subscription_service.model.Abonnement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AbonnementRepository extends JpaRepository<Abonnement, String> {
    List<Abonnement> findByUtilisateurIdUtilisateur(Integer idUtilisateur);
}
