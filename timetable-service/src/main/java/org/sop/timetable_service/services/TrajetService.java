package org.sop.timetable_service.services;


import org.sop.timetable_service.Model.Trajet;
import org.sop.timetable_service.Repository.TrajetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrajetService {
    @Autowired
    private TrajetRepository trajets;

    public TrajetService() {
    }

    public List<Trajet> getAllTrajets() {
        return this.trajets.findAll();
    }

    public Optional<Trajet> getTrajetById(String idTrajet) {
        return this.trajets.findById(idTrajet);
    }
    public Optional<Trajet> getTrajetByNom(String nom) {
        return this.trajets.findByNom(nom);  // Méthode ajoutée pour récupérer un trajet par son nom
    }
    public Trajet ajouterTrajet(Trajet trajet) {
        return (Trajet)this.trajets.save(trajet);
    }

    public void supprimerTrajet(String idTrajet) {
        this.trajets.deleteById(idTrajet);
    }
}
