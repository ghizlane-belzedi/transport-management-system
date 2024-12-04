package org.sop.timetable_service.Model;


import jakarta.persistence.ManyToOne;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalTime;
import java.util.Date;

@Document(
        collection = "Horaire"
)
public class Horaire {
    @Id
    private String idHoraire;
    private String idTrajet;
    private LocalTime heureDepart;
    private LocalTime heureArrivee;
    private Date date;
    @ManyToOne
    private Trajet trajet;

    public Horaire() {
    }

    public String getDetails() {
        return String.format("Horaire : Départ à %s, Arrivée à %s, Date : %s", this.heureDepart, this.heureArrivee, this.date);
    }

    public void setTrajet(Trajet trajet) {
        this.trajet = trajet;
    }

    public String getIdHoraire() {
        return this.idHoraire;
    }

    public void setIdHoraire(String idHoraire) {
        this.idHoraire = idHoraire;
    }

    public String getIdTrajet() {
        return this.idTrajet;
    }

    public void setIdTrajet(String idTrajet) {
        this.idTrajet = idTrajet;
    }

    public LocalTime getHeureDepart() {
        return this.heureDepart;
    }

    public void setHeureDepart(LocalTime heureDepart) {
        this.heureDepart = heureDepart;
    }

    public LocalTime getHeureArrivee() {
        return this.heureArrivee;
    }

    public void setHeureArrivee(LocalTime heureArrivee) {
        this.heureArrivee = heureArrivee;
    }

    public Date getDate() {
        return this.date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Trajet getTrajet() {
        return this.trajet;
    }
}