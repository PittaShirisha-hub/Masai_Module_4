# Web Application Concepts

---

## Q1. Role of Frontend (FE)

The Frontend (FE) is the part of a web application that users interact with directly. It runs in the user’s browser and focuses on presentation and usability.

### User Interface
Frontend is responsible for creating the visual layout of the application. This includes pages, buttons, forms, text, images, colors, and overall design. Technologies such as HTML, CSS, and JavaScript are used to build an attractive and responsive interface.

### User Interaction
Frontend handles user actions like clicking buttons, filling forms, scrolling pages, and navigating between screens. It provides instant feedback such as validation messages, alerts, and animations to improve user experience.

### Communication with Backend
Frontend sends requests to the backend using HTTP methods like GET and POST. It receives data (usually in JSON format) from the backend and displays it dynamically on the user interface.

---

## Q2. Role of Backend (BE)

The Backend (BE) is the server-side part of a web application that manages data, logic, and security.

### Server-side Processing
Backend processes requests coming from the frontend. It applies business rules, performs calculations, and decides how the application should respond to each request.

### Database Handling
Backend interacts with databases to store, retrieve, update, and delete data. It ensures data consistency and manages relationships between different data records.

### Security and Authentication
Backend is responsible for user authentication and authorization. It verifies user credentials, manages sessions or tokens, and protects sensitive information from unauthorized access.

---

## Q3. Business Logic

Business Logic refers to the rules and decision-making processes that define how a business operates within a web application. It controls how data is processed and ensures that business rules are followed correctly.

### Examples of Business Logic

1. **E-commerce Website**
   Applying discounts only when the total purchase amount exceeds a certain value.

2. **Banking Application**
   Preventing money transfer if the account balance is insufficient.

3. **Online Booking System**
   Allowing seat booking only if seats are available and preventing double bookings.

Business logic ensures that the application behaves according to real-world business policies.

---

## Q4. Client–Server Model

The Client–Server Model is a network architecture where tasks are divided between clients and servers.

### Client
The client is the user-side application, such as a web browser or mobile app. It sends requests to the server and displays responses to the user.

### Server
The server is a system that processes client requests, applies logic, interacts with databases, and sends responses back to the client.

### Communication
Communication occurs over the internet using protocols like HTTP or HTTPS. The client sends a request, and the server responds with data or status information.

---

## Q5. Three-Tier Architecture

Three-Tier Architecture divides a web application into three separate layers to improve structure and maintainability.

### Presentation Layer
This layer handles the user interface and user interaction. It includes frontend technologies such as HTML, CSS, and JavaScript.

### Application (Business) Layer
This layer contains business logic and server-side processing. It connects the presentation layer with the data layer.

### Data Layer
The data layer manages the database and handles data storage, retrieval, and updates.

### Why This Architecture Is Used
It is used to separate concerns, improve scalability, enhance security, and make applications easier to maintain and update.

---

## Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language because of its efficiency and strong ecosystem.

### Performance
With Node.js, JavaScript uses a non-blocking, event-driven architecture, allowing it to handle multiple requests efficiently.

### Ecosystem
JavaScript has a large ecosystem with npm providing thousands of libraries and tools for backend development.

### Popular Backend Frameworks
Popular JavaScript backend frameworks include:
- Express.js
- NestJS
- Koa
- Fastify

Using JavaScript for both frontend and backend allows better code reuse and faster development.