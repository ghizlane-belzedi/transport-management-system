package org.sop.user_service;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import static org.springframework.mock.http.server.reactive.MockServerHttpRequest.post;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class UtilisateurIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testInscriptionEtConnexion() throws Exception {
        // Étape 1 : Inscription
        String utilisateurJson = "{ \"cin\": \"AB12345\", \"nomUtilisateur\": \"testUser\", \"email\": \"test@example.com\", \"motDePasse\": \"password123\" }";
        mockMvc.perform((RequestBuilder) post("/api/utilisateurs/inscription")
                        .contentType(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.valueOf(utilisateurJson)))
                .andExpect(status().isOk())
                .andExpect((ResultMatcher) content().string("Utilisateur enregistré avec succès !"));

        // Étape 2 : Connexion
        String connexionJson = "{ \"nomUtilisateur\": \"testUser\", \"motDePasse\": \"password123\" }";
        mockMvc.perform((RequestBuilder) post("/api/utilisateurs/connexion")
                        .contentType(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.valueOf(connexionJson)))
                .andExpect(status().isOk())
                .andExpect((ResultMatcher) jsonPath("$.token").exists());
    }
}
