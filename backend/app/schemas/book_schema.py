from pydantic import BaseModel


class BookCreate(BaseModel):
    title: str
    author: str
    category: str
    isbn: str
    quantity: int


class BookResponse(BaseModel):
    id: int
    title: str
    author: str
    category: str
    isbn: str
    quantity: int
    available: int

    class Config:
        from_attributes = True