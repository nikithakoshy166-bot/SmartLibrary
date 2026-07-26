from pydantic import BaseModel
from datetime import date


class BorrowRequest(BaseModel):
    user_id: int
    book_id: int


class BorrowResponse(BaseModel):
    id: int
    user_id: int
    book_id: int

    user_name: str | None = None
    book_title: str | None = None

    borrow_date: date
    due_date: date
    return_date: date | None
    status: str
    fine: int

    class Config:
        from_attributes = True