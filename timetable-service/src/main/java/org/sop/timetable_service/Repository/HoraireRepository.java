package org.sop.timetable_service.Repository;

import org.sop.timetable_service.Model.Horaire;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HoraireRepository extends MongoRepository<Horaire, String> {
}
