package org.sop.timetable_service.services;


import org.sop.timetable_service.Model.Bus;
import org.sop.timetable_service.Repository.BusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BusService {
    @Autowired
    private BusRepository busRepository;

    public BusService() {
    }

    public List<Bus> getAllBuses() {
        return this.busRepository.findAll();
    }

    public Bus addBus(Bus bus) {
        return (Bus)this.busRepository.save(bus);
    }

    public Optional<Bus> getBusById(String id) {
        return this.busRepository.findById(id);
    }

    public void updateBusState(String id, String nouvelEtat) {
        Bus bus = (Bus)this.busRepository.findById(id).orElseThrow(() -> {
            return new RuntimeException("Bus non trouvé");
        });
        bus.mettreAJourEtat(nouvelEtat);
        this.busRepository.save(bus);
    }

    public void deleteBus(String id) {
        this.busRepository.deleteById(id);
    }
}
