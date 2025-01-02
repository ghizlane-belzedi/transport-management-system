package org.sop.subscription_service.service;

import java.util.List;
import java.util.stream.Collectors;

import org.sop.subscription_service.dto.AbonnementDTO;
import org.sop.subscription_service.repository.AbonnementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AbonnementService {

    @Autowired
    private AbonnementRepository abonnementRepository;

    public List<AbonnementDTO> getAbonnementsByUtilisateur(Integer idUtilisateur) {
        return abonnementRepository.findByUtilisateurIdUtilisateur(idUtilisateur).stream().map(abonnement -> {
            AbonnementDTO dto = new AbonnementDTO();
            dto.setIdAbonnement(abonnement.getIdAbonnement());
            dto.setDateDebut(abonnement.getDateDebut());
            dto.setDateFin(abonnement.getDateFin());
            dto.setStatut(abonnement.getStatut());
            dto.setTypePlan(abonnement.getTypePlan().name());
            return dto;
        }).collect(Collectors.toList());
    }
}
