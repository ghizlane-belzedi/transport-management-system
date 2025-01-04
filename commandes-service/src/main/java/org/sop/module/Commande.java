package org.sop.module;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Document(collection = "Commande")
public class Commande {
    @Id
    private String idCommande;
    private String idUtilisateur;
    private List<String> listeTickets;
    private double montantTotal;
    private String statut;
    private LocalDateTime dateCommande;

    public Commande() {
        this.dateCommande = LocalDateTime.now();
        this.statut = "En cours";
    }

    public String getIdCommande() {
        return idCommande;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public LocalDateTime getDateCommande() {
        return dateCommande;
    }

    public void setDateCommande(LocalDateTime dateCommande) {
        this.dateCommande = dateCommande;
    }

    public double getMontantTotal() {
        return montantTotal;
    }

    public void setMontantTotal(double montantTotal) {
        this.montantTotal = montantTotal;
    }

    public String getIdUtilisateur() {
        return idUtilisateur;
    }

    public void setIdUtilisateur(String idUtilisateur) {
        this.idUtilisateur = idUtilisateur;
    }

    public List<String> getListeTickets() {
        return listeTickets;
    }

    public void setListeTickets(List<String> listeTickets) {
        this.listeTickets = listeTickets;
    }

    public void setIdCommande(String idCommande) {
        this.idCommande = idCommande;
    }
}

