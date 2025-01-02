package org.sop.subscription_service.dto;

import java.time.LocalDate;

public class AbonnementDTO {
    private String idAbonnement;
    private LocalDate dateDebut;
    private LocalDate dateFin;
    private String statut;
    private String typePlan;

    // Getters et Setters
    public String getIdAbonnement() {
        return idAbonnement;
    }

    public void setIdAbonnement(String idAbonnement) {
        this.idAbonnement = idAbonnement;
    }

    public LocalDate getDateDebut() {
        return dateDebut;
    }

    public void setDateDebut(LocalDate dateDebut) {
        this.dateDebut = dateDebut;
    }

    public LocalDate getDateFin() {
        return dateFin;
    }

    public void setDateFin(LocalDate dateFin) {
        this.dateFin = dateFin;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public String getTypePlan() {
        return typePlan;
    }

    public void setTypePlan(String typePlan) {
        this.typePlan = typePlan;
    }
}
