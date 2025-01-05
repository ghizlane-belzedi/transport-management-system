package org.sop.timetable_service.services;

import org.sop.timetable_service.Model.TrajetBus;
import org.sop.timetable_service.Repository.TrajetBusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class TrajetBusService {
    @Autowired
    private TrajetBusRepository trajetBusRepository;

    public List<TrajetBus> getAllTrajetBus() {
        return trajetBusRepository.findAll();
    }

    public Optional<TrajetBus> getTrajetBusById(String id) {
        return trajetBusRepository.findById(id);
    }

    public TrajetBus ajouterTrajetBus(TrajetBus trajetBus) {
        return trajetBusRepository.save(trajetBus);
    }

    public void supprimerTrajetBus(String id) {
        trajetBusRepository.deleteById(id);
    }

    public List<TrajetBus> getTrajetsByBusId(String idBus) {
        return trajetBusRepository.findByIdBus(idBus);
    }

    public List<TrajetBus> getTrajetsByTrajetId(String idTrajet) {
        return trajetBusRepository.findByIdTrajet(idTrajet);
    }
}
