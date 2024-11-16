@SpringBootTest
@RunWith(SpringRunner.class)
public class UtilisateurServiceTest {

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
