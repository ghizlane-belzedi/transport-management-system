package org.sop.subscription_service.repository;

import org.sop.subscription_service.model.PaiementAbn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaiementAbnRepository extends JpaRepository<PaiementAbn, String> {
}
