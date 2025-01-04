package org.sop.ticket_service.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AppConfig {

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authz -> authz
                        .requestMatchers(HttpMethod.POST, "/api/tickets").permitAll() // Permet les requêtes POST
                        .requestMatchers(HttpMethod.DELETE, "/api/tickets").permitAll() // Permet les requêtes DELETE
                        .requestMatchers(HttpMethod.PUT, "/api/tickets").permitAll() // Permet les requêtes PUT
                        .anyRequest().permitAll() // Permet toutes les autres requêtes
                );


        // Désactivation explicite de la protection CSRF pour Spring Security 6.x
        http.csrf(csrf -> csrf.disable());

        return http.build();
    }
}
