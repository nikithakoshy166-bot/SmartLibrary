from datetime import date, timedelta

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.book import Book
from app.models.user import User
from app.models.borrow_record import BorrowRecord
from app.schemas.borrow_record import BorrowRequest, BorrowResponse

router = APIRouter(
    prefix="/borrow",
    tags=["Borrow Books"]
)


@router.post("/", response_model=BorrowResponse)
def borrow_book(request: BorrowRequest, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.id == request.user_id).first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    book = db.query(Book).filter(Book.id == request.book_id).first()

    if not book:
        raise HTTPException(status_code=404, detail="Book not found")

    if book.available <= 0:
        raise HTTPException(status_code=400, detail="Book not available")

    borrow = BorrowRecord(
        user_id=request.user_id,
        book_id=request.book_id,
        borrow_date=date.today(),
        due_date=date.today() + timedelta(days=14),
        status="Borrowed",
        fine=0
    )

    book.available -= 1

    db.add(borrow)
    db.commit()
    db.refresh(borrow)

    return {
        "id": borrow.id,
        "user_id": borrow.user_id,
        "book_id": borrow.book_id,
        "user_name": user.name,
        "book_title": book.title,
        "borrow_date": borrow.borrow_date,
        "due_date": borrow.due_date,
        "return_date": borrow.return_date,
        "status": borrow.status,
        "fine": borrow.fine
    }


@router.get("/", response_model=list[BorrowResponse])
def get_all_borrow_records(db: Session = Depends(get_db)):

    records = db.query(BorrowRecord).all()

    result = []

    for record in records:
        result.append({
            "id": record.id,
            "user_id": record.user_id,
            "book_id": record.book_id,
            "user_name": record.user.name,
            "book_title": record.book.title,
            "borrow_date": record.borrow_date,
            "due_date": record.due_date,
            "return_date": record.return_date,
            "status": record.status,
            "fine": record.fine
        })

    return result


@router.put("/return/{borrow_id}")
def return_book(borrow_id: int, db: Session = Depends(get_db)):

    borrow = db.query(BorrowRecord).filter(BorrowRecord.id == borrow_id).first()

    if not borrow:
        raise HTTPException(status_code=404, detail="Borrow record not found")

    if borrow.status == "Returned":
        raise HTTPException(status_code=400, detail="Book already returned")

    book = db.query(Book).filter(Book.id == borrow.book_id).first()

    borrow.return_date = date.today()
    borrow.status = "Returned"

    days_late = (borrow.return_date - borrow.due_date).days

    if days_late > 0:
        borrow.fine = days_late * 10
    else:
        borrow.fine = 0

    book.available += 1

    db.commit()
    db.refresh(borrow)

    return {
        "message": "Book returned successfully",
        "fine": borrow.fine
    }