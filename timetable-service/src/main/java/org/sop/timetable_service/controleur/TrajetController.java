package org.sop.timetable_service.controleur;


import org.sop.timetable_service.Model.Horaire;
import org.sop.timetable_service.Model.Trajet;
import org.sop.timetable_service.services.HoraireService;
import org.sop.timetable_service.services.TrajetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping({"/trajet"})
public class TrajetController {
    @Autowired
    private TrajetService trajetService;
    @Autowired
    private HoraireService horaireService;
    public TrajetController(TrajetService trajetService) {
        this.trajetService = trajetService;
    }

    @GetMapping
    public ResponseEntity<List<Trajet>> getAllTrajets() {
        try {
            List<Trajet> trajets = this.trajetService.getAllTrajets();
            return ResponseEntity.ok(trajets);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    @GetMapping("/name/{nom}")
    public ResponseEntity<Trajet> getTrajetByNom(@PathVariable String nom) {
        Optional<Trajet> trajet = trajetService.getTrajetByNom(nom);
        return trajet.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @GetMapping({"/{id}"})
    public Optional<Trajet> getTrajetById(@PathVariable String id) {
        return this.trajetService.getTrajetById(id);
    }

    @PostMapping
    public void ajouterTrajet(@RequestBody Trajet trajet) {
        this.trajetService.ajouterTrajet(trajet);
    }

    @DeleteMapping({"/{id}"})
    public void supprimerTrajet(@PathVariable String id) {
        this.trajetService.supprimerTrajet(id);
    }
/*
    @GetMapping({"/{id}/horaires"})
    public ResponseEntity<List<Horaire>> getHorairesForTrajet(@PathVariable String id) {
        try {
            List<Horaire> horaires = this.horaireService.getHorairesForTrajet(id);
            return ResponseEntity.ok(horaires);
        } catch (RuntimeException var3) {
            return ResponseEntity.notFound().build();
        }
    }*/
}
