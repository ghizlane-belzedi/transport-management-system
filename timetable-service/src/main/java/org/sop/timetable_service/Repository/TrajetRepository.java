package org.sop.timetable_service.Repository;

import org.sop.timetable_service.Model.Trajet;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TrajetRepository extends MongoRepository<Trajet, String> {
}
