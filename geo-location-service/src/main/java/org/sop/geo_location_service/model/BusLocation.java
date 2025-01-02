package org.sop.geo_location_service.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Data
@Document(collection = "bus_locations")
public class BusLocation {
    @Id
    private String id;
    private String busId; // Identifiant du bus
    private double latitude; // Latitude
    private double longitude; // Longitude
    private LocalDateTime timestamp; // Date et heure de la localisation
}
