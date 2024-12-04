package org.sop.timetable_service.controleur;


import org.sop.timetable_service.Model.Bus;
import org.sop.timetable_service.services.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/bus"})
public class BusController {
    @Autowired
    private BusService busService;

    public BusController() {
    }

    @GetMapping
    public List<Bus> getAllBuses() {
        return this.busService.getAllBuses();
    }

    @PostMapping
    public Bus addBus(@RequestBody Bus bus) {
        return this.busService.addBus(bus);
    }

    @PutMapping({"/{id}/etat"})
    public ResponseEntity<Void> updateBusState(@PathVariable String id, @RequestParam String nouvelEtat) {
        this.busService.updateBusState(id, nouvelEtat);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping({"/{id}"})
    public ResponseEntity<Void> deleteBus(@PathVariable String id) {
        this.busService.deleteBus(id);
        return ResponseEntity.noContent().build();
    }
}
