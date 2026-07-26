import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

function Books() {
  const [books, setBooks] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await api.get("/books/");
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchBooks = async () => {
    try {
      if (keyword.trim() === "") {
        fetchBooks();
        return;
      }

      const response = await api.get(`/books/search?keyword=${keyword}`);
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const borrowBook = async (bookId) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));

        await api.post("/borrow/", {
            user_id: user.id,
            book_id: bookId,
        });

      alert("Book borrowed successfully!");

      fetchBooks();
    } catch (error) {
      alert(error.response?.data?.detail || "Unable to borrow book");
    }
  };

  return (
    <><Navbar/>
    <div className="container mt-5">
      <h2 className="mb-4">Library Books</h2>

      <div className="row mb-3">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title or author"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <button
            className="btn btn-primary w-100"
            onClick={searchBooks}
          >
            Search
          </button>
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>ISBN</th>
            <th>Quantity</th>
            <th>Available</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>{book.isbn}</td>
              <td>{book.quantity}</td>
              <td>{book.available}</td>
              <td>
                <button
                  className="btn btn-success btn-sm"
                  onClick={() => borrowBook(book.id)}
                  disabled={book.available === 0}
                >
                  Borrow
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Books;