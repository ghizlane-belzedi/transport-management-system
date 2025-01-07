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

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setBusId(String busId) {
        this.busId = busId;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}