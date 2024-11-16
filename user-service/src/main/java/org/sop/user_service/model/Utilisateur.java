package org.sop.user_service.model;

import jakarta.persistence.*;
import org.sop.user_service.model.Role;

import java.util.List;


@Entity
@Table(name="Utilisateur")
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idUtilisateur;

    @Column(nullable = false, unique = true)
    private String cin;

    @Column(nullable = false, unique = true)
    private String nomUtilisateur;

    @Column(nullable = false)
    private String motDePasse;

    @Column(nullable = false, unique = true)
    private String email;

    private String adresse;
    private String telephone;

    @Enumerated(EnumType.STRING)
    private Role role;

    // Getters and setters

    public int getIdUtilisateur() {
        return idUtilisateur;
    }

    public String getCin() {
        return cin;
    }

    public void setCin(String cin) {
        this.cin = cin;
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

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    // Inscription d'un nouvel utilisateur
    public void inscrire(String nomUtilisateur, String motDePasse, String email) {
        this.nomUtilisateur = nomUtilisateur;
        this.motDePasse = motDePasse;
        this.email = email;
        // Autres logiques d'inscription ici
    }

    // Validation d'un utilisateur par email
    /*public boolean validerUtilisateur(String email) {
        // Logique de validation ici
        return this.email.equals(email);
    }*/

    // Connexion d'un utilisateur
    public boolean connexion(String nomUtilisateur, String motDePasse) {
        return this.nomUtilisateur.equals(nomUtilisateur) && this.motDePasse.equals(motDePasse);
    }

    // Déconnexion d'un utilisateur
    public void deconnexion() {
        // Logique de déconnexion
    }

    // Réinitialisation du mot de passe
    public void reinitialiserMotDePasse(String email) {
        if (this.email.equals(email)) {
            // Logique de réinitialisation ici
        }
    }

    // Mise à jour des informations de l'utilisateur
    public void MAJInformations() {
        // Logique de mise à jour
    }
/*
    // Souscrire à un abonnement
    public Abonnement souscrireAbonnement(PlanAbonnement plan) {
        // Logique pour souscrire à un abonnement
        return new Abonnement();
    }
*/
    // Annuler un abonnement
    public boolean annulerAbonnement(String idAbonnement) {
        // Logique pour annuler un abonnement
        return true;
    }

    // Recevoir une notification
    /*public boolean recevoirNotification(Notification notification) {
        // Logique pour recevoir une notification
        return true;
    }*/
}
