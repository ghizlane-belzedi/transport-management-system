package org.sop.repository;

import org.sop.module.Commande;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository  // <- Cette annotation est essentielle
public interface CommandeRepository extends MongoRepository<Commande, String> {
    List<Commande> findByIdUtilisateur(String idUtilisateur);
}
