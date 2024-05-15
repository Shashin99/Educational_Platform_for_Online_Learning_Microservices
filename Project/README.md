# EduWave

## Introduction

Welcome to EduWave, an educational learning platform designed to empower motivated learners in achieving their education goals. Our platform offers a wide range of courses tailored to fulfill learners' diverse needs and objectives. Through user-friendly web interfaces, students can easily browse available courses, sign up for them, and track their progress effortlessly.

EduWave consists of four main services:

1. **User Service**: Handles user registration, login, and role-based access control.
2. **Course Service**: Manages the creation, administration, and delivery of courses to students and instructors.
3. **Learner Service**: Facilitates access to courses and enables learners to track their course progress.
4. **Enroll Service**: Handles the enrollment process for students, including payment integration.

Additionally, a Gateway Service is integrated to facilitate secure and convenient transactions for course enrollments.

The architecture of EduWave is based on the principles of Microservices, Docker, and Kubernetes. The backend, built with Node.js, utilizes an event-driven, asynchronous design for scalable and high-performance solutions. Microservices architecture allows for the decomposition of the system into loosely linked services, each responsible for specific functions.

The user interface (Web client interface) is built using ReactJS, emphasizing user-friendliness and interactivity. Security and authentication are prioritized, ensuring user identification and authentication through OTP verification and role-based access control.

## High-level Architecture

EduWave's architecture ensures a responsive design readable on various web devices. The backend comprises four separate services: User Service, Course Service, Learner Service, and Enroll Service, all operating within a Node.js microservices architecture. These services are independently dockerized for agility and scalability and communicate through an API gateway. Data scalability is ensured by storing data in distinct tables in a MongoDB database named "EduWave."

To handle payment-related functions securely, the Enroll Service includes integration with the PayHere sandbox payment gateway. Additionally, SMS notifications are sent using an SMS handler, and email functionality is employed for user registration and enrollment processes.

## Service Interface

### 1. User Service

The User Service handles user registration, login, and role-based access control. It generates and sends OTP for verification during the registration process and directs users to respective dashboards based on their roles (Admin, Student, or Instructor).

### 2. Enroll Service

The Enroll Service facilitates students' course enrollment through a user-friendly interface and integrates with the PayHere payment gateway for secure transactions. Course enrollment data is stored in the EduWave MongoDB, and the service is dockerized for agility and reliability.

### 3. Course Service

The Course Service facilitates the creation, administration, and delivery of courses. It provides tools for course instructors to manage course content, while administrators approve course content submissions.

### 4. Learner Service

The Learner Service enhances the learning experience by allowing users to access and track their course progress. Users can browse course catalogs, view detailed course information, and monitor their completion status within each course.

## Authentication / Security Mechanism

1. **JWT Authentication**: Securely authenticates incoming requests to prevent unauthorized access.
2. **Bcrypt Password Encryption**: Ensures password security by encrypting and storing passwords in the database.
3. **Registration and Login Form Validation**: Enforces validation rules to prevent duplicate registrations and ensure secure login.
4. **Email Verification**: Users must verify their email addresses using OTP for registration.
5. **Field Validation**: Implements strict validation guidelines to ensure data integrity and prevent security risks.

## Getting Started

To get started with EduWave:

1. Clone the repository.
2. Install dependencies for each service.
3. Set up the MongoDB database.
4. Configure environment variables for services.
5. Start each service using Docker or Node.js.
6. Access the web client interface to explore courses and functionalities.

## Contributors

- [List of contributors]
Hanshani S.G.H.S.
Rajapaksha C. S.
Wimaladharma T. H. Y. B. 
Kalpajith K. L. S.
