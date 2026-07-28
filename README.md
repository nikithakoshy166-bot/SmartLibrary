# 📚 Smart Library Management System

![React](https://img.shields.io/badge/Frontend-React-blue)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-green)
![MySQL](https://img.shields.io/badge/Database-MySQL-orange)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black)
![Render](https://img.shields.io/badge/Backend-Render-purple)

A full-stack **Smart Library Management System** built using **FastAPI**, **React (Vite)**, and **MySQL**. The application enables users to register, log in securely, browse books, borrow and return books, and view borrowing history. It also includes a dashboard displaying real-time library statistics.

---

# 🌐 Live Demo

### Frontend (Vercel)
https://smart-library-tau.vercel.app

### Backend API (Render)
https://smartlibrary-backend-7rip.onrender.com

### Swagger Documentation
https://smartlibrary-backend-7rip.onrender.com/docs

---

## 🚀 Features

### 👤 User Management
- User Registration
- Secure User Login
- Password Encryption using Bcrypt
- Logout Functionality

### 📚 Book Management
- View Available Books
- Search Books
- Borrow Books
- Return Books
- Automatic Book Availability Update

### 📖 Borrow Management
- Borrow History
- Due Date Tracking
- Return Status
- Fine Calculation

### 📊 Dashboard
- Total Registered Users
- Total Books
- Available Books
- Borrowed Books

---

# 🛠️ Tech Stack

### Frontend
- React
- Vite
- Bootstrap
- Axios
- React Router DOM

### Backend
- FastAPI
- SQLAlchemy
- Pydantic
- Uvicorn
- Passlib (Bcrypt)

### Database
- MySQL (Railway Cloud)

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: Railway

---

# 📂 Project Structure

```
SmartLibrary/
│
├── backend/
│   ├── routers/
│   ├── models.py
│   ├── schemas.py
│   ├── database.py
│   ├── auth.py
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/nikithakoshy166-bot/SmartLibrary.git

cd SmartLibrary
```

---

## 2️⃣ Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt
```

Create a `.env` file inside the **backend** folder.

Example:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=smart_library
DB_USER=root
DB_PASSWORD=your_password

SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

Run the backend

```bash
uvicorn main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# 🗄️ Database

This project uses **MySQL**.

### Tables

- users
- books
- borrow_records

For deployment, the database is hosted on **Railway MySQL**.

---

# 📷 Screenshots

Add screenshots of:

- Login Page
- Register Page
- Dashboard
- Books Page
- Borrow History
- Swagger API Documentation

---

# 🔮 Future Enhancements

- Admin Dashboard
- Role-Based Access Control
- Book Reservation
- Email Notifications
- Barcode / QR Code Integration
- Reports and Analytics
- Dark Mode

---

# 👩‍💻 Author

**Nikitha Anna Koshy**

GitHub Profile

https://github.com/nikithakoshy166-bot

---

# 📄 License

This project was developed for educational and learning purposes.
