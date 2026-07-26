from fastapi import FastAPI
from app.routes.book import router as book_router
from app.routes.borrow_record import router as borrow_router
from app.routes.dashboard import router as dashboard_router
from app.routes.user import router as user_router
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.models.user import User
from app.models.book import Book
from app.models.borrow_record import BorrowRecord
from app.routes.auth import router as auth_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Smart Library Management System",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(book_router)
app.include_router(borrow_router)
app.include_router(dashboard_router)
app.include_router(user_router)

@app.get("/")
def home():
    return {
        "message": "Welcome to Smart Library Management System"
    }