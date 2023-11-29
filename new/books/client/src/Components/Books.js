// src/components/Books.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the list of books from your API
    axios
      .get("http://localhost:8080/books/get")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container text-center">
        {" "}
        {/* Use text-center class to center content */}
        <h1
          style={{
            fontWeight: "bold",
            fontFamily: "Georgia",
            fontSize: "20px",
          }}
        >
          Books Admin
        </h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Book Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {books.map((book) => (
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          // Handle clicking on a book to show details
                          // You can use React Router for navigation to book details
                        }}
                      >
                        Show Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
