// Cart.js
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Retrieve cart items from localStorage and set the initial cart state
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (book) => {
    // Remove the selected book from the cart state
    const updatedCart = cart.filter((item) => item.id !== book.id);
    setCart(updatedCart);

    // Update localStorage with the modified cart
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, book) => total + parseFloat(book.price), 0);
  };

  return (
    <div>
      <Navbar />
      <div className="text-center">
        <h1
          style={{
            fontWeight: "bold",
            fontFamily: "Georgia",
            fontSize: "20px",
          }}
        >
          Your Cart
        </h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <table className="table">
                <thead>
                  <tr>
                    <th>Book</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((book) => (
                    <tr key={book.id}>
                      <td>{book.name}</td>
                      <td>${book.price}</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeFromCart(book)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="total">
          <strong>Total: ${calculateTotalPrice()}</strong>
        </div>
      </div>
    </div>
  );
};

export default Cart;
