package org.sop.timetable_service.Repository;

import org.sop.timetable_service.Model.Trajet;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface TrajetRepository extends MongoRepository<Trajet, String> {
    Optional<Trajet> findByNom(String nom);  // Recherche d'un trajet par son nom

}
