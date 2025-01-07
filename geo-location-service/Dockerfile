# Utiliser une image de base avec Java 17
FROM openjdk:17-jdk-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier JAR généré dans le conteneur
COPY target/geo-location-service-0.0.1-SNAPSHOT.jar app.jar

# Exposer le port utilisé par l'application Spring Boot
EXPOSE 8080

# Commande pour démarrer l'application
ENTRYPOINT ["java", "-jar", "app.jar"]