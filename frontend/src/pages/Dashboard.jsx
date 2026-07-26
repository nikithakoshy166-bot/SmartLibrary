import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import api from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    total_books: 0,
    borrowed_books: 0,
    available_books: 0,
    total_users: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await api.get("/dashboard");
      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="text-center mb-5">
          <h1 className="fw-bold">📚 Smart Library Dashboard</h1>
          <p className="text-muted">
            Manage books, users and borrow records efficiently.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-3">
            <div className="card shadow border-0 text-center">
              <div className="card-body">
                <h1>📚</h1>
                <h5>Total Books</h5>
                <h2>{stats.total_books}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow border-0 text-center">
              <div className="card-body">
                <h1>📖</h1>
                <h5>Borrowed Books</h5>
                <h2>{stats.books_borrowed}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow border-0 text-center">
              <div className="card-body">
                <h1>✅</h1>
                <h5>Available Books</h5>
                <h2>{stats.books_available}</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow border-0 text-center">
              <div className="card-body">
                <h1>👥</h1>
                <h5>Total Users</h5>
                <h2>{stats.total_users}</h2>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center mt-5">
          <Link className="btn btn-primary btn-lg" to="/books">
            Browse Books
          </Link>
        </div>

      </div>
    </>
  );
}

export default Dashboard;