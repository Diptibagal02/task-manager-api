# 📝 Task Manager API

A backend REST API for managing personal tasks built using **Node.js, Express, TypeScript, and MongoDB**.

This project allows users to register, login, and manage their tasks securely using JWT authentication. Each user can create, update, delete, and view only their own tasks.

---

## 🚀 Features

* User Registration
* User Login with JWT
* Secure Authentication
* Protected Routes
* Create Task
* Get All Tasks (User-specific)
* Get Single Task
* Update Task
* Delete Task
* Input Validation
* Error Handling

---

## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **TypeScript**
* **MongoDB**
* **Mongoose**
* **JWT (jsonwebtoken)**
* **bcrypt**
* **Nodemon**

---

## 📁 Project Structure

```
task-manager-api
│
├── src
│   ├── controllers
│   │   ├── authController.ts
│   │   └── taskController.ts
│   │
│   ├── middleware
│   │   └── authMiddleware.ts
│   │
│   ├── models
│   │   ├── User.ts
│   │   └── Task.ts
│   │
│   ├── routes
│   │   ├── authRoutes.ts
│   │   └── taskRoutes.ts
│   │
│   └── app.ts
│
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone repository

```
git clone https://github.com/Diptibagal02/task-manager-api.git
cd task-manager-api
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Create `.env` file in root

```
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
JWT_SECRET=secret123
PORT=5000
```

---

### 4️⃣ Run server

```
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## 🔐 Authentication APIs

### Register User

**POST** `/api/auth/register`

Body:

```json
{
  "name": "Dipti",
  "email": "dipti@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "message": "User registered successfully"
}
```

---

### Login User

**POST** `/api/auth/login`

Body:

```json
{
  "email": "dipti@gmail.com",
  "password": "123456"
}
```

Response:

```json
{
  "token": "JWT_TOKEN"
}
```

---

## 📋 Task APIs

All task routes require header:

```
Authorization: Bearer TOKEN
```

---

### Create Task

**POST** `/api/tasks`

Body:

```json
{
  "title": "Study Node",
  "description": "Practice project"
}
```

---

### Get All Tasks

**GET** `/api/tasks`

Response:

```json
[
  {
    "_id": "...",
    "title": "...",
    "description": "...",
    "status": "pending"
  }
]
```

---

### Get Single Task

**GET** `/api/tasks/:id`

---

### Update Task

**PUT** `/api/tasks/:id`

Body:

```json
{
  "title": "Updated task"
}
```

---

### Delete Task

**DELETE** `/api/tasks/:id`

Response:

```json
{
  "message": "Task deleted"
}
```

---

## 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client
* REST Client

---

## 🧠 What I Learned

* REST API development
* Express + TypeScript structure
* MongoDB with Mongoose
* JWT authentication
* Middleware in Node.js
* Git & GitHub workflow
* Project structuring

---

## 👩‍💻 Author

**Dipti Bagal**
MCA Student
Java Full Stack Learner
Backend Developer (Node.js)

GitHub:
https://github.com/Diptibagal02
