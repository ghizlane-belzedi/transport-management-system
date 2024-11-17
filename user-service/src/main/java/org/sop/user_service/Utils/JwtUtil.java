package org.sop.user_service.Utils;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtUtil {

    @Value("${jwt.secret}")
    private String secret; // Injection de la clé depuis application.properties

    // Générer un token
    public String generateToken(String username) {
        if (secret == null || secret.isEmpty()) {
            throw new IllegalArgumentException("Secret key cannot be null or empty");
        }
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 heures
                .signWith(SignatureAlgorithm.HS256, secret) // Utilise la clé injectée
                .compact();
    }

    // Nouvelle méthode pour valider les tokens
    public boolean validateToken(String token) {
        if (TokenBlacklist.isBlacklisted(token)) {
            return false; // Token invalide car dans la liste noire
        }
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        } catch (SignatureException e) {
            return false; // Token invalide
        }
    }
}
