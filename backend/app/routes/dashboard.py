from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func

from app.database import get_db
from app.models.user import User
from app.models.book import Book

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def dashboard(db: Session = Depends(get_db)):

    total_users = db.query(func.count(User.id)).scalar()

    total_books = db.query(func.sum(Book.quantity)).scalar() or 0

    books_available = db.query(func.sum(Book.available)).scalar() or 0

    books_borrowed = total_books - books_available

    return {
        "total_users": total_users,
        "total_books": total_books,
        "books_available": books_available,
        "books_borrowed": books_borrowed
    }