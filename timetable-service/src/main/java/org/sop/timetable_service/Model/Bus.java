package org.sop.timetable_service.Model;

import jakarta.persistence.Id;
import org.sop.timetable_service.Model.TrajetBus;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "Bus")
public class Bus {
    @Id
    private String idBus;
    private String numero;
    private int capacite;
    private String etat;

    @DBRef
    private List<TrajetBus> trajets = new ArrayList<>();

    public Bus() {
    }

    // Getter et Setter pour trajets
    public List<TrajetBus> getTrajets() {
        return trajets;
    }

    public void setTrajets(List<TrajetBus> trajets) {
        this.trajets = trajets;
    }

    // Autres getters/setters et méthodes
    public String getDetails() {
        return String.format("Bus #%s (Capacité : %d), État : %s", this.numero, this.capacite, this.etat);
    }

    public void ajouterTrajet(TrajetBus trajetBus) {
        this.trajets.add(trajetBus);
    }

    public void supprimerTrajet(TrajetBus trajetBus) {
        this.trajets.remove(trajetBus);
    }

    public void mettreAJourEtat(String nouvelEtat) {
    }
}
