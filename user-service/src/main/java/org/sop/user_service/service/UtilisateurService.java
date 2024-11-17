package org.sop.user_service.service;

import org.sop.user_service.DAO.UtilisateurRepository;
import org.sop.user_service.DTO.UtilisateurDTO;
import org.sop.user_service.model.Utilisateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UtilisateurService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Méthode pour inscrire un utilisateur avec un DTO
    public UtilisateurDTO inscrire(UtilisateurDTO utilisateurDTO) {
        Utilisateur utilisateur = convertirDtoEnUtilisateur(utilisateurDTO);
        utilisateur.setMotDePasse(passwordEncoder.encode(utilisateur.getMotDePasse()));
        Utilisateur utilisateurEnregistre = utilisateurRepository.save(utilisateur);
        return convertirUtilisateurEnDto(utilisateurEnregistre);
    }

    // Connexion utilisateur
    public Optional<UtilisateurDTO> connexion(String nomUtilisateur, String motDePasse) {
        Optional<Utilisateur> utilisateur = utilisateurRepository.findByNomUtilisateur(nomUtilisateur);
        if (utilisateur.isPresent() && passwordEncoder.matches(motDePasse, utilisateur.get().getMotDePasse())) {
            return Optional.of(convertirUtilisateurEnDto(utilisateur.get()));
        }
        return Optional.empty();
    }

    // Ajouter un utilisateur
    public UtilisateurDTO ajouterUtilisateur(UtilisateurDTO utilisateurDTO) {
        Utilisateur utilisateur = convertirDtoEnUtilisateur(utilisateurDTO);
        utilisateur.setMotDePasse(passwordEncoder.encode(utilisateur.getMotDePasse()));
        Utilisateur utilisateurAjoute = utilisateurRepository.save(utilisateur);
        return convertirUtilisateurEnDto(utilisateurAjoute);
    }

    // Modifier les informations d'un utilisateur par nom d'utilisateur
    public UtilisateurDTO modifierUtilisateur(String nomUtilisateur, UtilisateurDTO utilisateurDTO) {
        Optional<Utilisateur> utilisateurExistant = utilisateurRepository.findByNomUtilisateur(nomUtilisateur);
        if (utilisateurExistant.isPresent()) {
            Utilisateur utilisateur = utilisateurExistant.get();
            utilisateur.setCin(utilisateurDTO.getCin());
            utilisateur.setNomUtilisateur(utilisateurDTO.getNomUtilisateur());
            utilisateur.setEmail(utilisateurDTO.getEmail());
            utilisateur.setAdresse(utilisateurDTO.getAdresse());
            utilisateur.setTelephone(utilisateurDTO.getTelephone());
            utilisateur.setRole(utilisateurDTO.getRole());
            if (utilisateurDTO.getMotDePasse() != null && !utilisateurDTO.getMotDePasse().isEmpty()) {
                utilisateur.setMotDePasse(passwordEncoder.encode(utilisateurDTO.getMotDePasse()));
            }
            Utilisateur utilisateurMisAJour = utilisateurRepository.save(utilisateur);
            return convertirUtilisateurEnDto(utilisateurMisAJour);
        } else {
            throw new RuntimeException("Utilisateur introuvable avec le nom d'utilisateur : " + nomUtilisateur);
        }
    }

    // Obtenir tous les utilisateurs
    public List<UtilisateurDTO> obtenirTousLesUtilisateurs() {
        List<Utilisateur> utilisateurs = utilisateurRepository.findAll();
        return utilisateurs.stream()
                .map(this::convertirUtilisateurEnDto)
                .collect(Collectors.toList());
    }

    public Optional<UtilisateurDTO> trouverParNomUtilisateur(String nomUtilisateur) {
        Optional<Utilisateur> utilisateur = utilisateurRepository.findByNomUtilisateur(nomUtilisateur);
        return utilisateur.map(this::convertirUtilisateurEnDto);
    }


    // Trouver un utilisateur par son email
    public Optional<UtilisateurDTO> trouverParEmail(String email) {
        Optional<Utilisateur> utilisateur = utilisateurRepository.findByEmail(email);
        return utilisateur.map(this::convertirUtilisateurEnDto);
    }

    // Supprimer un utilisateur par nom d'utilisateur
    public void supprimerUtilisateurParNom(String nomUtilisateur) {
        Optional<Utilisateur> utilisateur = utilisateurRepository.findByNomUtilisateur(nomUtilisateur);
        if (utilisateur.isPresent()) {
            utilisateurRepository.delete(utilisateur.get());
        } else {
            throw new RuntimeException("Utilisateur introuvable avec le nom d'utilisateur : " + nomUtilisateur);
        }
    }


    // Méthodes utilitaires pour conversion entre Utilisateur et UtilisateurDTO
    private Utilisateur convertirDtoEnUtilisateur(UtilisateurDTO dto) {
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setCin(dto.getCin());
        utilisateur.setNomUtilisateur(dto.getNomUtilisateur());
        utilisateur.setEmail(dto.getEmail());
        utilisateur.setAdresse(dto.getAdresse());
        utilisateur.setTelephone(dto.getTelephone());
        utilisateur.setRole(dto.getRole());
        utilisateur.setMotDePasse(dto.getMotDePasse()); // Le mot de passe sera encodé avant l'enregistrement
        return utilisateur;
    }

    private UtilisateurDTO convertirUtilisateurEnDto(Utilisateur utilisateur) {
        UtilisateurDTO dto = new UtilisateurDTO();
        dto.setCin(utilisateur.getCin());
        dto.setNomUtilisateur(utilisateur.getNomUtilisateur());
        dto.setEmail(utilisateur.getEmail());
        dto.setAdresse(utilisateur.getAdresse());
        dto.setTelephone(utilisateur.getTelephone());
        dto.setRole(utilisateur.getRole());
        dto.setMotDePasse(utilisateur.getMotDePasse()); // Ne pas inclure le mot de passe dans le DTO pour des raisons de sécurité
        return dto;
    }
}
