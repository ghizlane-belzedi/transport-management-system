package org.sop.subscription_service.service;

import java.util.List;
import java.util.stream.Collectors;

import org.sop.subscription_service.dto.UtilisateurDTO;
import org.sop.subscription_service.repository.UtilisateurRepository;
import org.sop.user_service.model.Role;  // Importer l'énumération Role
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UtilisateurService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    public List<UtilisateurDTO> getAllUtilisateurs() {
        return utilisateurRepository.findAll().stream().map(utilisateur -> {
            UtilisateurDTO dto = new UtilisateurDTO();
            dto.setIdUtilisateur(utilisateur.getIdUtilisateur());
            dto.setNomUtilisateur(utilisateur.getNomUtilisateur());
            dto.setEmail(utilisateur.getEmail());
            dto.setRole(utilisateur.getRole().name());  // Convertir Role en chaîne
            return dto;
        }).collect(Collectors.toList());
    }
}
