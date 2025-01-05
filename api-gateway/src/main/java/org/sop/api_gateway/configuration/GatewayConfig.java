package org.sop.api_gateway.configuration;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(r -> r.path("/api/utilisateurs/**")
                        .uri("http://localhost:8080"))
                .route("subscription-service", r -> r.path("/api/abonnements/**")
                        .uri("http://localhost:8085"))
                .route("ticket-service", r -> r.path("/api/tickets/**")
                        .uri("http://localhost:8083"))
                .route("timetable-service", r -> r.path("/bus/**")
                        .uri("http://localhost:8181"))
                .build();
    }
}
