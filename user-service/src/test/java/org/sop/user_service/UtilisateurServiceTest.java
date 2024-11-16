/*package org.sop.user_service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.sop.user_service.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith(SpringRunner.class)
public class UtilisateurServiceTest<UtilisateurDto> {

    @Autowired
    private UtilisateurService utilisateurService;

    @Test
    public void testInscriptionUtilisateur() {
        UtilisateurDto dto = new UtilisateurDto();
        dto.setCin("AB12345");
        dto.setNomUtilisateur("testUser");
        dto.setEmail("test@example.com");
        dto.setMotDePasse("password123");

        String message = utilisateurService.inscription(dto);
        assertEquals("Utilisateur enregistré avec succès !", message);
    }
}
*/