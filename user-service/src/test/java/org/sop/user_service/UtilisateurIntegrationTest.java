@SpringBootTest
@AutoConfigureMockMvc
public class UtilisateurIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testInscriptionEtConnexion() throws Exception {
        // Étape 1 : Inscription
        String utilisateurJson = "{ \"cin\": \"AB12345\", \"nomUtilisateur\": \"testUser\", \"email\": \"test@example.com\", \"motDePasse\": \"password123\" }";
        mockMvc.perform(post("/api/utilisateurs/inscription")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(utilisateurJson))
                .andExpect(status().isOk())
                .andExpect(content().string("Utilisateur enregistré avec succès !"));

        // Étape 2 : Connexion
        String connexionJson = "{ \"nomUtilisateur\": \"testUser\", \"motDePasse\": \"password123\" }";
        mockMvc.perform(post("/api/utilisateurs/connexion")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(connexionJson))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").exists());
    }
}
