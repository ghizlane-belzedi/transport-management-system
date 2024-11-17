package org.sop.user_service.Utils;

import java.util.HashSet;
import java.util.Set;

public class TokenBlacklist {
    private static final Set<String> blacklist = new HashSet<>();

    // Ajoute un token à la liste noire
    public static void addToken(String token) {
        blacklist.add(token);
    }

    // Vérifie si un token est dans la liste noire
    public static boolean isBlacklisted(String token) {
        return blacklist.contains(token);
    }
}
