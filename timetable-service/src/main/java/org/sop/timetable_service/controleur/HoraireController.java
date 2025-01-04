package org.sop.timetable_service.controleur;

import org.sop.timetable_service.Model.Horaire;
import org.sop.timetable_service.services.HoraireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/horaire"})
public class HoraireController {
    @Autowired
    private HoraireService horaireService;

    public HoraireController() {
    }

    @GetMapping
    public ResponseEntity<List<Horaire>> getHoraire() {
        List<Horaire> horaires = this.horaireService.getHoraire();
        return horaires != null && !horaires.isEmpty() ? ResponseEntity.ok(horaires) : ResponseEntity.noContent().build();
    }

    @PostMapping
    public void addHoraire(@RequestBody Horaire horaire) {
        this.horaireService.addHoraire(horaire);
    }

    @DeleteMapping({"/{id}"})
    public void deleteHoraire(@PathVariable String horaireId) {
        this.horaireService.deleteHoraire(horaireId);
    }
}
