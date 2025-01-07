package org.sop.geo_location_service.controller;

import org.sop.geo_location_service.model.BusLocation;
import org.sop.geo_location_service.Service.BusLocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bus-location")
public class BusLocationController {

    @Autowired
    private BusLocationService busLocationService;

    // Enregistrer la position d'un bus
    @PostMapping("/save")
    public BusLocation saveLocation(@RequestParam String busId, @RequestParam double latitude, @RequestParam double longitude) {
        return busLocationService.saveLocation(busId, latitude, longitude);
    }

    // Récupérer les positions d'un bus
    @GetMapping("/locations/{busId}")
    public List<BusLocation> getLocationsByBusId(@PathVariable String busId) {
        return busLocationService.getLocationsByBusId(busId);
    }

    // Récupérer l'adresse à partir des coordonnées
    @GetMapping("/address")
    public String getAddress(@RequestParam double latitude, @RequestParam double longitude) {
        return busLocationService.getAddress(latitude, longitude);
    }
}