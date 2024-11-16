@SpringBootTest
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
public class UtilisateurControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void testInscriptionEndpoint() throws Exception {
        String utilisateurJson = "{ \"cin\": \"AB12345\", \"nomUtilisateur\": \"testUser\", \"email\": \"test@example.com\", \"motDePasse\": \"password123\" }";

        mockMvc.perform(post("/api/utilisateurs/inscription")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(utilisateurJson))
                .andExpect(status().isOk())
                .andExpect(content().string("Utilisateur enregistré avec succès !"));
    }

    @Test
    public void testConnexionEndpoint() throws Exception {
        String connexionJson = "{ \"nomUtilisateur\": \"testUser\", \"motDePasse\": \"password123\" }";

        mockMvc.perform(post("/api/utilisateurs/connexion")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(connexionJson))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token").exists());
    }
}
