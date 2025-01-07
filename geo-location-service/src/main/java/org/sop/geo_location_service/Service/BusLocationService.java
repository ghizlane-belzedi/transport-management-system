package org.sop.geo_location_service.Service;



import org.sop.geo_location_service.model.BusLocation;
import org.sop.geo_location_service.repository.BusLocationRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.List;
@Service
public class BusLocationService {

    private final BusLocationRepository repository;
    private final RestTemplate restTemplate;

    public BusLocationService(BusLocationRepository repository, RestTemplate restTemplate) {
        this.repository = repository;
        this.restTemplate = restTemplate;
    }

    // Enregistrer la position d'un bus
    public BusLocation saveLocation(String busId, double latitude, double longitude) {
        BusLocation location = new BusLocation();
        location.setBusId(busId);
        location.setLatitude(latitude);
        location.setLongitude(longitude);
        location.setTimestamp(LocalDateTime.now());
        return repository.save(location);
    }

    // Récupérer les positions d'un bus
    public List<BusLocation> getLocationsByBusId(String busId) {
        return repository.findByBusId(busId);
    }

    // Géocodage avec OpenStreetMap Nominatim
    public String getAddress(double latitude, double longitude) {
        String url = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + latitude + "&lon=" + longitude;
        return restTemplate.getForObject(url, String.class);
    }
}