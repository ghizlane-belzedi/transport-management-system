package org.sop.timetable_service.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;
import java.time.LocalTime;

@Document(collection = "TrajetBus")
public class TrajetBus {
    @Id
    private String id;
    private String idTrajet; // Référence au trajet
    private String idBus;    // Référence au bus
    private LocalTime heureDepart;
    private LocalTime heureArrivee;
    private LocalDate date;

    public TrajetBus() {
    }

    public TrajetBus(String idTrajet, String idBus, LocalTime heureDepart, LocalTime heureArrivee, LocalDate date) {
        this.idTrajet = idTrajet;
        this.idBus = idBus;
        this.heureDepart = heureDepart;
        this.heureArrivee = heureArrivee;
        this.date = date;
    }

    // Getters et Setters
    public String getIdTrajet() {
        return idTrajet;
    }

    public void setIdTrajet(String idTrajet) {
        this.idTrajet = idTrajet;
    }

    public String getIdBus() {
        return idBus;
    }

    public void setIdBus(String idBus) {
        this.idBus = idBus;
    }

    public LocalTime getHeureDepart() {
        return heureDepart;
    }

    public void setHeureDepart(LocalTime heureDepart) {
        this.heureDepart = heureDepart;
    }

    public LocalTime getHeureArrivee() {
        return heureArrivee;
    }

    public void setHeureArrivee(LocalTime heureArrivee) {
        this.heureArrivee = heureArrivee;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
