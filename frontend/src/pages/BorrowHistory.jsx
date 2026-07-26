import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function BorrowHistory() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await api.get("/borrow/");
      setRecords(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const returnBook = async (borrowId) => {
    try {
      const response = await api.put(`/borrow/return/${borrowId}`);

      alert(response.data.message);

      fetchHistory();
    } catch (error) {
      alert(error.response?.data?.detail || "Unable to return book");
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <h2 className="mb-4 text-center">Borrow History</h2>

        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Book</th>
              <th>Borrow Date</th>
              <th>Due Date</th>
              <th>Return Date</th>
              <th>Status</th>
              <th>Fine</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.user_name}</td>
                <td>{record.book_title}</td>
                <td>{record.borrow_date}</td>
                <td>{record.due_date}</td>
                <td>{record.return_date || "-"}</td>
                <td>
                  <span
                    className={
                      record.status === "Borrowed"
                        ? "badge bg-warning text-dark"
                        : "badge bg-success"
                    }
                  >
                    {record.status}
                  </span>
                </td>
                <td>₹{record.fine}</td>
                <td>
                  {record.status === "Borrowed" ? (
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => returnBook(record.id)}
                    >
                      Return
                    </button>
                  ) : (
                    <span className="text-success fw-bold">Returned</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BorrowHistory;