
# Todo App - API Documentation

This is a simple Todo app built with Node.js, Express, and MySQL. It provides a set of RESTful API routes for performing CRUD operations on tasks. The app allows users to create, read, update, and delete todo items.

## Table of Contents

- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [Create Todo](#create-todo)
  - [Get All Todos](#get-all-todos)
  - [Update Todo](#update-todo)
  - [Delete Todo](#delete-todo)
- [Technologies Used](#technologies-used)
- [License](#license)

## Installation

### Prerequisites

Ensure that you have the following software installed on your machine:

- [Node.js](https://nodejs.org/en/download/)
- [MySQL](https://dev.mysql.com/downloads/installer/)

### Steps to run the app

1. Clone the repository:

   ```bash
   git clone https://github.com/rahulsinghpharthyal/ToDo_MySQL.git
   ```

2. Navigate into the project folder:

   ```bash
   cd todo-app
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up your MySQL database and create a `.env` file with the following variables:

   ```plaintext
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=todo_app
   ```

5. Start the server:

   ```bash
   npm start
   ```

6. The server will be running on `http://localhost:8000`.

## API Endpoints

### 1. Create Todo

- **Endpoint**: `POST /api/v1/todos/create-todo`
- **Description**: Creates a new todo task.
- **Request Body**:
  ```json
  {
    "title": "Task Title",
    "description": "Task description",
    "status": "Pending" // bydefault its Pending
  }
  ```
- **Response**:
  ```json
  {
    "message": "Todo created successfully"
  }
  ```

### 2. Get All Todos

- **Endpoint**: `GET /api/v1/todos/all-todos`
- **Description**: Fetches all todo tasks.
- **Response**:
  ```json
  {
    "message": "All Task",
    "task": [
      {
        "id": 1,
        "title": "Task 1",
        "description": "Description 1",
        "status": "Pending"
      },
      {
        "id": 2,
        "title": "Task 2",
        "description": "Description 2",
        "status": "Completed"
      }
    ]
  }
  ```

### 3. Update Todo

- **Endpoint**: `PUT /api/v1/todos/update-todo/:id`
- **Description**: Updates a todo task by its ID.
- **Request Body** (Example):
  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description",
    "status": "Completed"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Todo updated successfully"
  }
  ```

### 4. Delete Todo

- **Endpoint**: `DELETE /api/v1/stodos/delete-todo/:id`
- **Description**: Deletes a todo task by its ID.
- **Response**:
  ```json
  {
    "message": "Todo deleted successfully"
  }
  ```

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for building RESTful APIs.
- **MySQL**: Relational database for storing todo tasks.
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
- **cors**: Package to enable Cross-Origin Resource Sharing (CORS).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
