package org.sop.geo_location_service.repository;

import org.sop.geo_location_service.model.BusLocation;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface BusLocationRepository extends MongoRepository<BusLocation, String> {
    List<BusLocation> findByBusId(String busId); // Trouver les positions d'un bus spécifique
}