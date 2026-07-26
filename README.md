# 📚 Smart Library Management System

A full-stack **Smart Library Management System** built using **FastAPI**, **React (Vite)**, and **MySQL**. The application enables users to register, log in, browse books, borrow and return books, and view borrowing history. It also includes a dashboard displaying library statistics.

---

## 🚀 Features

### 👤 User Management
- User Registration
- User Login
- Secure Authentication
- Logout Functionality

### 📚 Book Management
- View Available Books
- Search Books
- Borrow Books
- Return Books
- Automatic Availability Update

### 📖 Borrow Management
- Borrow History
- Due Date Tracking
- Fine Calculation
- Return Status

### 📊 Dashboard
- Total Registered Users
- Total Books
- Available Books
- Borrowed Books

---

## 🛠️ Tech Stack

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

### Database
- MySQL

---

## 📂 Project Structure

```
SmartLibrary/
│
├── backend/
│   ├── app/
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/nikithakoshy166-bot/SmartLibrary.git
cd SmartLibrary
```

---

### 2. Backend Setup

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt
```

Create a `.env` file inside the backend folder.

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

Run the backend:

```bash
uvicorn main:app --reload
```

Backend URL:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

---

### 3. Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL:

```
http://localhost:5173
```

---

## 🗄️ Database

The project uses **MySQL**.

Tables:

- users
- books
- borrow_records

---

## 📷 Screenshots

You can add screenshots here after uploading them.

Example:

- Login Page
- Dashboard
- Books Page
- Borrow History
- Swagger API

---

## 🔮 Future Enhancements

- Admin Dashboard
- Role-Based Access Control
- Online Fine Payment
- Email Notifications
- Book Reservation
- Barcode/QR Code Support
- Reports and Analytics

---

## 👩‍💻 Author

**Nikitha Anna Koshy**

GitHub:
https://github.com/nikithakoshy166-bot

---

## 📄 License

This project was developed for educational and learning purposes.
