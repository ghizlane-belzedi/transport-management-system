import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    private static final Key secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256); // Génère une clé secrète pour signer le token

    // Durée de validité du token (ex : 10 minutes)
    private static final long EXPIRATION_TIME = 10 * 60 * 1000; // 10 minutes en millisecondes

    // Méthode pour générer un JWT
    public static String generateToken(String userId) {
        return Jwts.builder()
                .setSubject(userId) // Le "subject" est l'identifiant de l'utilisateur
                .setIssuedAt(new Date()) // Date de création du token
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME)) // Date d'expiration
                .signWith(secretKey) // Signer avec la clé secrète
                .compact();
    }

    // Méthode pour extraire le nom d'utilisateur à partir du token
    public String extractUsername(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // Méthode pour valider le token en vérifiant le nom d'utilisateur et la date d'expiration
    public Boolean isTokenValid(String token, String username) {
        String extractedUsername = extractUsername(token);
        return (extractedUsername.equals(username) && !isTokenExpired(token));
    }

    // Méthode pour vérifier si le token est expiré
    private Boolean isTokenExpired(String token) {
        Date expirationDate = Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getExpiration();
        return expirationDate.before(new Date());
    }
}
