## Introduction

This Node.js application is a simple task management system built with Express.js and MongoDB. It allows users to perform CRUD operations on tasks, such as adding, retrieving, updating, and deleting tasks.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

   ```bash
   git clone -b server <repository-url>
   
2. Navigate to the project directory:
   cd <project-directory>
   
3.Install dependencies:
   npm install
   
4.Create a .env file in the root of the project.

Add the following configuration to the .env file:
DATABASE=<your-mongodb-connection-string>
PORT=<desired-port-number>
Replace <your-mongodb-connection-string> with your MongoDB connection string,
and <desired-port-number> with the preferred port for the application.

5.Database Setup
Make sure MongoDB is running on your machine or provide the appropriate connection URI in the .env file.

6.Usage
To start the application, run the following command:
Starting server in the Dev mood 
command:
cd .\src\ 
ts-node server.ts

7.Routes
The application exposes the following routes:

POST /addTask or (http://localhost:port/addTask): Adds a new task giving only title in req body
{
  "title":"Develop Task management system frontend"
}.


GET /allTasks: Retrieves all tasks.


PUT /updateTask: Updates a task by ID and title.
req body for update postman req example  :
 (http://localhost:port/updateTask)
{
  "id":"656f682e438fe58c6ccca974",
  "title":"Develop Task management system backend"
}



DELETE /deleteTask/:id: Deletes a task by ID.
delete api call in postman example (http://localhost:port/deleteTask/656f69df438fe58c6ccca980)
These routes are implemented in separate files located in the routes directory.

