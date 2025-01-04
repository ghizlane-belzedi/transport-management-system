package org.sop.user_service.DTO;

public class SouscriptionRequest {

    private int idUtilisateur;
    private String planAbonnement;

    // Constructeur
    public SouscriptionRequest(int idUtilisateur, String planAbonnement) {
        this.idUtilisateur = idUtilisateur;
        this.planAbonnement = planAbonnement;
    }

    // Getters et setters
    public int getIdUtilisateur() {
        return idUtilisateur;
    }

    public void setIdUtilisateur(int idUtilisateur) {
        this.idUtilisateur = idUtilisateur;
    }

    public String getPlanAbonnement() {
        return planAbonnement;
    }

    public void setPlanAbonnement(String planAbonnement) {
        this.planAbonnement = planAbonnement;
    }
}
