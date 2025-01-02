package org.sop.geo_location_service.controller;


import org.sop.geo_location_service.Service.BusLocationService;
import org.sop.geo_location_service.model.BusLocation;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.List;
@RestController
@RequestMapping("/api/locations")
public class BusLocationController {

    private final BusLocationService service;

    public BusLocationController(BusLocationService service) {
        this.service = service;
    }

    // Enregistrer la position d'un bus
    @PostMapping
    public BusLocation saveLocation(
            @RequestParam String busId,
            @RequestParam double latitude,
            @RequestParam double longitude) {
        return service.saveLocation(busId, latitude, longitude);
    }

    // Récupérer les positions d'un bus
    @GetMapping("/{busId}")
    public List<BusLocation> getLocationsByBusId(@PathVariable String busId) {
        return service.getLocationsByBusId(busId);
    }

    // Géocodage : Transformer des coordonnées en adresse
    @GetMapping("/geocode")
    public String getAddress(
            @RequestParam double latitude,
            @RequestParam double longitude) {
        return service.getAddress(latitude, longitude);
    }
}