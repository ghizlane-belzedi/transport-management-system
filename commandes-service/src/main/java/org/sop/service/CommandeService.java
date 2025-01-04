package org.sop.service;

import org.sop.module.Commande;
import org.sop.repository.CommandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CommandeService {

    @Autowired
    private CommandeRepository commandeRepository;

    public Commande creerCommande(Commande commande) {
        return commandeRepository.save(commande);
    }

    public List<Commande> listerCommandesUtilisateur(String idUtilisateur) {
        return commandeRepository.findByIdUtilisateur(idUtilisateur);
    }

    public Optional<Commande> obtenirCommande(String idCommande) {
        return commandeRepository.findById(idCommande);
    }

    public Commande ajouterTicket(String idCommande, String idTicket) {
        Commande commande = commandeRepository.findById(idCommande)
                .orElseThrow(() -> new RuntimeException("Commande non trouvée"));
        commande.getListeTickets().add(idTicket);
        return commandeRepository.save(commande);
    }
}
