package org.sop.timetable_service.Model;

import jakarta.persistence.ManyToOne;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Document(collection = "Horaire")
public class Horaire {
    @Id
    private String idHoraire = "N/A";
    private String idTrajet = "N/A";
    private String heureDepart = "00:00";
    private String heureArrivee = "00:00";
    private LocalDateTime date = LocalDateTime.now();  // Utilisation de LocalDateTime
    @ManyToOne
    private Trajet trajet;

    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss");

    // Constructeur
    public Horaire(String idHoraire, String idTrajet, String heureDepart, String heureArrivee, LocalDateTime date) {
        this.idHoraire = (idHoraire != null) ? idHoraire : "N/A";
        this.idTrajet = (idTrajet != null) ? idTrajet : "N/A";
        this.heureDepart = (heureDepart != null) ? heureDepart : "00:00";
        this.heureArrivee = (heureArrivee != null) ? heureArrivee : "00:00";
        this.date = (date != null) ? date : LocalDateTime.now();
    }

    // Méthode de conversion String -> LocalDateTime
    public void setDateFromString(String dateStr) {
        try {
            this.date = LocalDateTime.parse(dateStr, FORMATTER);
        } catch (Exception e) {
            this.date = LocalDateTime.now();
        }
    }

    // Getters
    public String getDetails() {
        return String.format("Horaire : Départ à %s, Arrivée à %s, Date : %s",
                this.heureDepart, this.heureArrivee, this.date.format(FORMATTER));
    }

    public String getIdHoraire() {
        return this.idHoraire;
    }

    public String getIdTrajet() {
        return this.idTrajet;
    }

    public String getHeureDepart() {
        return this.heureDepart;
    }

    public String getHeureArrivee() {
        return this.heureArrivee;
    }

    public LocalDateTime getDate() {
        return this.date;
    }

    public Trajet getTrajet() {
        return this.trajet;
    }

    // Setters
    public void setIdHoraire(String idHoraire) {
        this.idHoraire = (idHoraire != null) ? idHoraire : "N/A";
    }

    public void setIdTrajet(String idTrajet) {
        this.idTrajet = (idTrajet != null) ? idTrajet : "N/A";
    }

    public void setHeureDepart(String heureDepart) {
        this.heureDepart = (heureDepart != null) ? heureDepart : "00:00";
    }

    public void setHeureArrivee(String heureArrivee) {
        this.heureArrivee = (heureArrivee != null) ? heureArrivee : "00:00";
    }

    public void setDate(LocalDateTime date) {
        this.date = (date != null) ? date : LocalDateTime.now();
    }

    public void setTrajet(Trajet trajet) {
        this.trajet = trajet;
    }
}
