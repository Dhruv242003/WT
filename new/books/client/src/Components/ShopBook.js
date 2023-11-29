import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import image from "../bookphoto.jpg";
import mainImg from "../shop.webp";
import "../shopBook.css";

import Navbar from "./Navbar";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ShopBook = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch books from your API and set them in the state
    fetchBooksFromApi().then((data) => setBooks(data));

    // Retrieve cart items from localStorage and set the initial cart state
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const fetchBooksFromApi = async () => {
    try {
      const response = await fetch("http://localhost:8080/books/get"); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching books:", error);
      return [];
    }
  };

  const addToCart = (book) => {
    // Add the selected book to the cart state
    setCart([...cart, book]);

    // Store the updated cart in localStorage
    localStorage.setItem("cart", JSON.stringify([...cart, book]));
  };

  const yellowStarStyle = {
    color: "yellow",
  };

  return (
    <div>
      <Navbar />
      {/* <h1>Books</h1> */}

      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          marginTop: "20px",
        }}
      >
        <div
          className="shopImage"
          style={{
            backgroundImage: `url(${mainImg})`,
            backgroundSize: "cover",
            width: "90vw",
            height: "80vh",
            position: "relative", // Add this style to make it a relative container for absolute positioning
          }}
        >
          {/* Add text on the left side with padding */}
          <div
            className="image-text"
            style={{
              position: "absolute",
              top: "50%", // Center vertically
              left: "80px", // Adjust the padding from the left
              transform: "translateY(-50%)", // Center vertically
              color: "black", // Text color
              fontSize: "109px", // Adjust the font size to make it big
              fontWeight: "bold", // Make it bold
              lineHeight: "1.06em",
              color: "rgb(14, 52, 90)",
            }}
          >
            A SOFA,
            <br />A GOOD
            <br />
            BOOK,
            <br />
            AND YOU.
          </div>
        </div>
      </div>

      <div
        className="custom-products-cart-container d-flex justify-content-end"
        style={{
          marginRight: "70px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <Link to="/cart">
          <button className="btn btn-info btn-lg">
            <FontAwesomeIcon icon={faShoppingCart} /> Books Added In Cart:{" "}
            <span className="caret">{cart.length}</span>
          </button>
        </Link>
      </div>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {books.map((book) => (
            <div
              className="col-md-4"
              style={{ marginTop: "10px", marginBottom: "10px" }}
              key={book.id}
            >
              <div className="">
                <img
                  className="custom-image-style"
                  src={image}
                  height="300"
                  width="200"
                  // style={{ marginLeft: "70px", marginTop: "10px" }}
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "block",
                    marginTop: "10px",
                  }}
                  alt={book.name}
                />
                <div className="text-center ">
                  <div style={{ cursor: "pointer" }}>
                    <p
                      style={{
                        // marginLeft: "70px",
                        marginTop: "0px",
                        marginBottom: "0px",
                        color: "#1e81b0",
                      }}
                    >
                      {book.name}
                    </p>
                    <p
                      style={{
                        // marginLeft: "70px",
                        marginTop: "0px",
                        marginBottom: "0px",
                      }}
                    >
                      {book.author}
                    </p>
                    <div className="book-stars" 
                    // style={{ marginLeft: "70px" }}
                    >
                      {Array.from(
                        { length: Math.floor(Math.random() * 5) + 1 },
                        (_, index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            style={{ color: "goldenrod" }}
                          />
                        )
                      )}
                    </div>
                    <p
                      style={{
                        // marginLeft: "70px",
                        marginTop: "0px",
                        marginBottom: "0px",
                        fontWeight: 600,
                        fontSize: "16px",
                      }}
                    >
                      ₹{book.price}
                    </p>
                  </div>
                  <div
                    className="offset-md-4 col-md-4"
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <button
                      className="btn btn-dark btn-sm "
                      style={{
                        width: "100px",
                      }}
                      onClick={() => addToCart(book)}
                      disabled={cart.some((item) => item.id === book.id)}
                    >
                      {cart.some((item) => item.id === book.id)
                        ? "Added"
                        : "Add To Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopBook;
