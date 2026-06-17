# 📝 Crud Todo App 

A simple **console-based Todo application** built using **Node.js and MySQL**, following a clean **layered architecture (Controller → Service → Repository)**.

This project demonstrates real backend structure, authentication flow, and CRUD operations in a CLI environment.

---

# 🚀 Features

## 👤 Authentication
- User Registration
- User Login
- Session-based user handling (CLI runtime)

## ✅ Task Management
- Add Task
- View All Tasks
- Edit Task
- Delete Task
- Search Tasks

## 🧠 Business Logic
- Input validation (email, password, required fields)
- Priority control (Low / Medium / High)
- Status tracking (Pending / Completed)
- User-specific tasks (multi-user support)

---

## 📁 Project Structure

```text
Crud Todo App
|
+-- controllers
|   +-- authController.js
|   +-- taskController.js
|
+-- services
|   +-- authService.js
|   +-- taskService.js
|
+-- repositories
|   +-- userRepository.js
|   +-- taskRepository.js
|
+-- config
|   +-- db.js
|
+-- utils
|   +-- validation.js
|
+-- app.js
```



---

# 🔄 System Flow

## 🔐 Authentication Flow

🖥️ User Input (CLI)  
   ↓  
🔐 AuthController  
   ↓  
⚙️ AuthService (Validation + Business Logic)  
   ↓  
📦 UserRepository  
   ↓  
🗄️ MySQL Database  


---

## 📝 Task Flow

🖥️ User Input (CLI)  
   ↓  
📝 TaskController  
   ↓  
⚙️ TaskService (Business Rules)  
   ↓  
📦 TaskRepository (SQL Queries)  
   ↓  
🗄️ MySQL Database  

---

## ⚙️ Installation & Setup

1️⃣ Clone project

git clone https://github.com/your-username/cli-todo-app.git
cd crud-todo-app
