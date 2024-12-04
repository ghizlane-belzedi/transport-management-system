package org.sop.timetable_service.Model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "Trajet")
public class Trajet {
    @Id
    private String idTrajet;
    private String depart;
    private String arrivee;
    private float duree;
    private float distance;
   // private List<Horaire> horaires;

    public Trajet(String idTrajet, String depart, String arrivee, float duree, float distance) {
        this.idTrajet = idTrajet;
        this.depart = depart;
        this.arrivee = arrivee;
        this.duree = duree;
        this.distance = distance;
        //this.horaires = new ArrayList();
    }

    public String getIdTrajet() {
        return idTrajet;
    }

    public void setIdTrajet(String idTrajet) {
        this.idTrajet = idTrajet;
    }

    public String getDepart() {
        return depart;
    }

    public void setDepart(String depart) {
        this.depart = depart;
    }

    public String getArrivee() {
        return arrivee;
    }

    public void setArrivee(String arrivee) {
        this.arrivee = arrivee;
    }

    public float getDuree() {
        return duree;
    }

    public void setDuree(float duree) {
        this.duree = duree;
    }

    public float getDistance() {
        return distance;
    }

    public void setDistance(float distance) {
        this.distance = distance;
    }
    /*

    @OneToMany(
            mappedBy = "trajet",
            cascade = {CascadeType.ALL},
            orphanRemoval = true
    )
    public void ajouterHoraire(Horaire horaire) {
        horaire.setTrajet(this);
        this.horaires.add(horaire);
    }

    public void supprimerHoraire(Horaire horaire) {
        horaire.setTrajet((Trajet)null);
        this.horaires.remove(horaire);
    }

    public List<Horaire> getHoraires() {
        return this.horaires;
    }

    public String getDetails() {
        return "Trajet de " + this.depart + " à " + this.arrivee + " (" + this.distance + " km, durée: " + this.duree + " heures)";
    }*/
}
