package org.sop.subscription_service.dto;

import org.sop.user_service.model.Role;  // Importer l'énumération Role

public class UtilisateurDTO {

    private Integer idUtilisateur;
    private String nomUtilisateur;
    private String email;
    private String role;

    // Getters et Setters
    public Integer getIdUtilisateur() {
        return idUtilisateur;
    }

    public void setIdUtilisateur(Integer idUtilisateur) {
        this.idUtilisateur = idUtilisateur;
    }

    public String getNomUtilisateur() {
        return nomUtilisateur;
    }

    public void setNomUtilisateur(String nomUtilisateur) {
        this.nomUtilisateur = nomUtilisateur;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;  // Retourner le rôle sous forme de chaîne
    }

    public void setRole(String role) {
        this.role = role;  // Accepter le rôle sous forme de chaîne
    }
}
