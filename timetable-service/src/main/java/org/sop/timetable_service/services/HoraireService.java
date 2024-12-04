package org.sop.timetable_service.services;


import org.sop.timetable_service.Model.Horaire;
import org.sop.timetable_service.Repository.HoraireRepository;
import org.sop.timetable_service.Repository.TrajetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HoraireService {
    @Autowired
    private TrajetRepository trajetRepository;
    @Autowired
    private HoraireRepository horaireRepository;

    public HoraireService() {
    }

    public List<Horaire> getHorairesForTrajet(String idTrajet) {
        return this.horaireRepository.findAll().stream().filter((horaire) -> {
            return horaire.getIdTrajet().equals(idTrajet);
        }).toList();
    }

    public List<Horaire> getHoraire() {
        return this.horaireRepository.findAll();
    }

    public void addHoraire(Horaire horaire) {
        this.horaireRepository.save(horaire);
    }

    public void deleteHoraire(String horaireId) {
        this.horaireRepository.deleteById(horaireId);
    }
}