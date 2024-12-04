package org.sop.timetable_service.Repository;

import org.sop.timetable_service.Model.Bus;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BusRepository extends MongoRepository<Bus, String> {
}
