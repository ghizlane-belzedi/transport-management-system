// UtilisateurService.java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UtilisateurService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UtilisateurDTO inscrire(UtilisateurDTO utilisateurDTO) {
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setCin(utilisateurDTO.getCin());
        utilisateur.setNomUtilisateur(utilisateurDTO.getNomUtilisateur());
        utilisateur.setEmail(utilisateurDTO.getEmail());
        utilisateur.setAdresse(utilisateurDTO.getAdresse());
        utilisateur.setTelephone(utilisateurDTO.getTelephone());
        utilisateur.setRole(utilisateurDTO.getRole());
        utilisateur.setMotDePasse(passwordEncoder.encode(utilisateurDTO.getMotDePasse()));

        utilisateurRepository.save(utilisateur);
        return utilisateurDTO;
    }

    public Optional<Utilisateur> connexion(String nomUtilisateur, String motDePasse) {
        Optional<Utilisateur> utilisateur = utilisateurRepository.findByNomUtilisateur(nomUtilisateur);
        if (utilisateur.isPresent() && passwordEncoder.matches(motDePasse, utilisateur.get().getMotDePasse())) {
            return utilisateur;
        }
        return Optional.empty();
    }

    public Optional<Utilisateur> trouverParEmail(String email) {
        return utilisateurRepository.findByEmail(email);
    }

    // Autres méthodes de gestion de l'utilisateur...
}
