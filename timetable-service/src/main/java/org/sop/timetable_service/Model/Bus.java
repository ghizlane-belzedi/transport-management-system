package org.sop.timetable_service.Model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(
        collection = "Bus"
)
public class Bus {
    @Id
    private String idBus;
    private String numero;
    private int capacite;
    private String etat;

    public Bus() {
    }

    public String getDetails() {
        return String.format("Bus #%s (Capacité : %d), État : %s", this.numero, this.capacite, this.etat);
    }

    public String getIdBus() {
        return idBus;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public void setIdBus(String idBus) {
        this.idBus = idBus;
    }

    public int getCapacite() {
        return capacite;
    }

    public void setCapacite(int capacite) {
        this.capacite = capacite;
    }

    public String getEtat() {
        return etat;
    }

    public void setEtat(String etat) {
        this.etat = etat;
    }

    public void mettreAJourEtat(String nouvelEtat) {
        this.etat = nouvelEtat;
    }
}
