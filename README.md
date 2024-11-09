# Urban Transport Management System

## **Project Description**

The Urban Transport Management System is a transportation solution designed for efficient urban mobility management. This system leverages a **Microservices Architecture** to provide a scalable, flexible, and robust platform for managing bus schedules, ticket sales, real-time bus tracking, and user subscriptions. The system is built to support the operations of a public transport company, ensuring users can seamlessly interact with the platform for managing transport-related tasks. The system is designed to improve operational efficiency, user engagement, and service availability through modular services, ensuring a smooth and user-friendly experience.

---

## **Functional Requirements**

### **User Management**
- **User Registration**: 
  - Users can create an account by providing details such as email and password.
  - The system validates and stores the user data in the database.

- **User Login**:
  - Users can log in using their credentials.
  - The system authenticates users and creates a session token for logged-in users.

- **Profile Management**:
  - Users can view and update their profile details.

### **Ticketing Service**
- **Ticket Purchase**: 
  - Users can purchase tickets for specific routes.
  - The system stores the purchased ticket data.

- **Ticket Management**: 
  - Users can view their purchased tickets and transaction history.

### **Schedule Management**
- **Viewing Schedules**:
  - Users can access bus schedules for various routes.

- **Real-Time Tracking**: 
  - Users can track buses in real-time on a map.

### **Subscription Service**
- **Managing Subscriptions**: 
  - Users can manage monthly or annual subscriptions for transport services.
  
- **Payment Integration**: 
  - Users can make payments for their subscriptions through integrated payment gateways.

---

## **Non-Functional Requirements**

### **Performance**
- **Response Time**: The system should respond to user actions within 2 seconds under normal load.
- **Throughput**: The system should be able to handle at least 1000 requests per second.

### **Scalability**
- **Horizontal Scalability**: The system should support horizontal scaling by adding more instances of services to handle increased load.
- **Elasticity**: The system should scale up or down dynamically based on the system load.

### **Security**
- **Access Control**: Role-based access control is enforced to ensure authorized users can perform specific actions.

### **Usability**
- **User Interface**: The interface should be intuitive and easy to navigate.
- **Accessibility**: The system must comply with accessibility standards to support users with disabilities.

### **Maintainability**
- **Code Quality**: The codebase should follow best practices and be well-documented.
- **Modularity**: The system is modular to allow easy updates and the addition of new features.

---

## **System Architecture**

The Urban Transport Management System is designed using **Microservices Architecture**, consisting of several independent services that work together to manage the various functionalities of the transport system.

### **Microservices Overview**
- **User Management Service**: Handles user-related operations, including authentication and profile management.
- **Ticketing Service**: Manages the purchasing and history of transport tickets.
- **Schedule Management Service**: Provides bus schedule data and handles real-time bus tracking.
- **Subscription Service**: Manages users' monthly and annual subscriptions.
- **API Gateway**: Acts as the single entry point for all client requests, routing them to the appropriate microservices.
- **Notification Service**: Sends notifications to users about schedule changes, delays, or other alerts.

---

## **Key Architectural Components**

### **Service Discovery**
- **Eureka Server** is used for service discovery. Each service registers itself with the Eureka Server, enabling dynamic discovery and load balancing.

### **API Gateway**
- **Spring Cloud Gateway** routes requests from clients to the appropriate microservices, and secures endpoints using **Spring Security**.

### **Inter-Service Communication**
- **REST APIs** are used for communication between services.

### **Containerization and Orchestration**
- **Docker** is used for containerizing each microservice.
- **Docker Compose** is used during development to define multi-container applications.
- **Kubernetes** manages container orchestration for deployment, scaling, and maintenance of services.

### **Monitoring and Observability**
- **Prometheus** is used to collect metrics from the services.
- **Grafana** visualizes these metrics and creates real-time dashboards.
- **Zipkin** enables distributed tracing, allowing the monitoring of requests across microservices.

### **CI/CD**
- **GitHub Actions** is used for Continuous Integration and Continuous Deployment, enabling automated pipelines for code testing, building, and deployment.

### **Security**
- **Spring Security** ensures that only authenticated and authorized users can access secure endpoints.

---

## **Advantages of the Architecture**
- **Scalability**: Each microservice can be scaled independently to handle varying loads.
- **Fault Isolation**: Failures in one service do not affect others, improving system reliability.
- **Technology Diversity**: Services can be implemented using different technologies if required.
- **Independent Development and Deployment**: Services can be developed, tested, and deployed independently, accelerating the development lifecycle.
