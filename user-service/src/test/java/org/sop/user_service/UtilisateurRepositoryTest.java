@SpringBootTest
@RunWith(SpringRunner.class)
public class UtilisateurRepositoryTest {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Test
    public void testSaveAndRetrieveUtilisateur() {
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setCin("AB12345");
        utilisateur.setNomUtilisateur("testUser");
        utilisateur.setMotDePasse("password123");
        utilisateur.setEmail("test@example.com");

        Utilisateur savedUser = utilisateurRepository.save(utilisateur);
        assertNotNull(savedUser);
        assertEquals("testUser", savedUser.getNomUtilisateur());
    }
}
