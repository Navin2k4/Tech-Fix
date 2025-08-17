# Smart Service Management System

## Overview
The Tech Fix is a microservices-based platform for managing service requests, users, and reports. It is designed for small businesses like IT support, home services, or maintenance companies.  

## Key Features
- User authentication and role-based access control
- Service request creation, assignment, and tracking
- Reporting module with PL/SQL and REST APIs
- Observer pattern for notifications

## Technologies
- **Backend:** Java 21, Spring Boot, Spring Data JPA, Hibernate, Spring Security
- **Testing & Logging:** JUnit, Mockito, SLF4J
- **Frontend:** React.js
- **Infrastructure:** Microservices, Docker, Maven Monorepo, CI/CD

## Project Structure
- **auth-service:** Authentication & authorization
- **core-service:** Service request management
- **reporting-service:** Reporting and analytics
- **common-lib:** Shared utilities, DTOs, and constants

## Purpose
Demonstrates a production-ready, scalable, and maintainable microservices architecture following **SOLID principles**, **design patterns**, and modern full-stack development practices.
