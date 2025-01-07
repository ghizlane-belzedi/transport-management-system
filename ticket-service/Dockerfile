# Utiliser une image de base avec Java
FROM openjdk:17-jdk-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier de build (pom.xml) et les sources
COPY pom.xml .
COPY src ./src

# Installer les dépendances et construire le JAR
#RUN mvn clean package -DskipTests

# Copier le JAR généré
COPY target/ticket-service-0.0.1-SNAPSHOT.jar app.jar

# Exposer le port du service
EXPOSE 8080

# Commande pour démarrer le service
ENTRYPOINT ["java", "-jar", "app.jar"]