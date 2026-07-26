from sqlalchemy import Column, Integer, ForeignKey, Date, String
from sqlalchemy.orm import relationship

from app.database import Base


class BorrowRecord(Base):
    __tablename__ = "borrow_records"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"))
    book_id = Column(Integer, ForeignKey("books.id"))

    borrow_date = Column(Date)
    due_date = Column(Date)
    return_date = Column(Date, nullable=True)

    status = Column(String(20), default="Borrowed")

    fine = Column(Integer, default=0)

    user = relationship("User")
    book = relationship("Book")