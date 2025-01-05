package org.sop.timetable_service.Repository;

import org.sop.timetable_service.Model.TrajetBus;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface TrajetBusRepository extends MongoRepository<TrajetBus, String> {
    List<TrajetBus> findByIdBus(String idBus);
    List<TrajetBus> findByIdTrajet(String idTrajet);
}
