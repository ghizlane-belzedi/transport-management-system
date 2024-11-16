package org.sop.user_service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import static org.springframework.mock.http.server.reactive.MockServerHttpRequest.post;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.content;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
public class UtilisateurControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testInscriptionEndpoint() throws Exception {
        String utilisateurJson = "{ \"cin\": \"AB12345\", \"nomUtilisateur\": \"testUser\", \"email\": \"test@example.com\", \"motDePasse\": \"password123\" }";

        mockMvc.perform((RequestBuilder) post("/api/utilisateurs/inscription")
                        .contentType(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.valueOf(utilisateurJson)))
                .andExpect(status().isOk())
                .andExpect((ResultMatcher) content().string("Utilisateur enregistré avec succès !"));
    }

    @Test
    public void testConnexionEndpoint() throws Exception {
        String connexionJson = "{ \"nomUtilisateur\": \"testUser\", \"motDePasse\": \"password123\" }";

        mockMvc.perform((RequestBuilder) post("/api/utilisateurs/connexion")
                        .contentType(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.valueOf(connexionJson)))
                .andExpect(status().isOk())
                .andExpect((ResultMatcher) jsonPath("$.token").exists());
    }
}
