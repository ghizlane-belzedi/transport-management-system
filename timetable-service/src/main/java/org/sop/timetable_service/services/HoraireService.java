package org.sop.timetable_service.services;

import org.sop.timetable_service.Model.Horaire;
import org.sop.timetable_service.Repository.HoraireRepository;
import org.sop.timetable_service.Repository.TrajetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class HoraireService {
    @Autowired
    private TrajetRepository trajetRepository;
    @Autowired
    private HoraireRepository horaireRepository;

    public HoraireService() {
    }

    // Convertir un String en LocalTime si nécessaire
    private LocalTime convertToLocalTime(String timeString) {
        return LocalTime.parse(timeString);
    }

    public List<Horaire> getHorairesForTrajet(String idTrajet) {
        return this.horaireRepository.findAll().stream()
                .filter(horaire -> horaire.getIdTrajet().equals(idTrajet))
                .collect(Collectors.toList());
    }

    public List<Horaire> getHoraire() {
        return this.horaireRepository.findAll();
    }

    public void addHoraire(Horaire horaire) {
        // Exemple de conversion si nécessaire
        if (horaire.getHeureDepart() != null) {
            LocalTime heureDepart = convertToLocalTime(horaire.getHeureDepart());
            horaire.setHeureDepart(heureDepart.toString());
        }
        if (horaire.getHeureArrivee() != null) {
            LocalTime heureArrivee = convertToLocalTime(horaire.getHeureArrivee());
            horaire.setHeureArrivee(heureArrivee.toString());
        }
        this.horaireRepository.save(horaire);
    }

    public void deleteHoraire(String horaireId) {
        this.horaireRepository.deleteById(horaireId);
    }
}
