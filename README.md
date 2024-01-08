# Speer Task

## Overview

This project implements a RESTful API using Node.js, Express, and MongoDB. It includes user authentication, request throttling, and a search functionality for notes based on keywords. The API supports CRUD operations for user notes and includes sharing functionality. Text indexing is utilized in MongoDB for high-performance keyword-based searches.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user data and notes.
- **jsonwebtoken (JWT)**: Authentication library for handling tokens.
- **Express Rate Limit**: Middleware for handling rate limiting.
- **express-slow-down**: Middleware for handling request throttling.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Jest**: Testing framework for unit and integration tests.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. **Run the following command for run the app:**
   ```bash
   npm start

3. **Run the tests files by using the command:**
   ```bash
   npm test

## API Endpoints

### Authentication Endpoints

**1. Create a new user account:**
#### Endpoint:
POST /auth/signup

**2. Log in to an existing user account and receive an access token:**
#### Endpoint:
POST /auth/login

### Note Endpoints

**1. Create a new note for the authenticated user:**
#### Endpoint:
POST /notes/create
#### Middleware:
Requires authentication

**2. Update an existing note by ID for the authenticated user:**
#### Endpoint:
PUT /notes/update/:id
#### Middleware:
Requires authentication

**3. Delete a note by ID for the authenticated user:**
#### Endpoint:
DELETE /notes/delete/:id
#### Middleware:
Requires authentication

**4. Get a list of all notes for the authenticated user:**
#### Endpoint:
GET /notes/getAll
#### Middleware:
Requires authentication

**5. Get all notes of the user who is logged-in:**
#### Endpoint:
GET /notes/getAllByUser
#### Middleware:
Requires authentication

**6. Get a note by ID for the authenticated user:**
#### Endpoint:
GET /notes/get/:id
#### Middleware:
Requires authentication

**7. Share a note with another user for the authenticated user:**
#### Endpoint:
POST /notes/share/:id
#### Middleware:
Requires authentication

**8. Search for notes based on keywords for the authenticated user:**
#### Endpoint:
GET /notes/search
#### Middleware:
Requires authentication

**9. Search for notes based on keywords in the notes created by the logged-in user:**
#### Endpoint:
GET /notes/searchByUser
#### Middleware:
Requires authentication
