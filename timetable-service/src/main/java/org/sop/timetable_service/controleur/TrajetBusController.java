package org.sop.timetable_service.controleur;

import org.sop.timetable_service.Model.TrajetBus;
import org.sop.timetable_service.services.TrajetBusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/trajetBus")
public class TrajetBusController {
    @Autowired
    private TrajetBusService trajetBusService;

    @GetMapping
    public ResponseEntity<List<TrajetBus>> getAllTrajetBus() {
        return ResponseEntity.ok(trajetBusService.getAllTrajetBus());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TrajetBus> getTrajetBusById(@PathVariable String id) {
        Optional<TrajetBus> trajetBus = trajetBusService.getTrajetBusById(id);
        return trajetBus.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<TrajetBus> ajouterTrajetBus(@RequestBody TrajetBus trajetBus) {
        TrajetBus savedTrajetBus = trajetBusService.ajouterTrajetBus(trajetBus);
        return ResponseEntity.ok(savedTrajetBus);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> supprimerTrajetBus(@PathVariable String id) {
        trajetBusService.supprimerTrajetBus(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/bus/{idBus}")
    public ResponseEntity<List<TrajetBus>> getTrajetsByBusId(@PathVariable String idBus) {
        return ResponseEntity.ok(trajetBusService.getTrajetsByBusId(idBus));
    }

    @GetMapping("/trajet/{idTrajet}")
    public ResponseEntity<List<TrajetBus>> getTrajetsByTrajetId(@PathVariable String idTrajet) {
        return ResponseEntity.ok(trajetBusService.getTrajetsByTrajetId(idTrajet));
    }
}
