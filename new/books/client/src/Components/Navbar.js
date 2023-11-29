import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS if needed

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <NavLink
            to="/"
            className="navbar-brand"
            style={{ fontWeight: "bold", fontFamily: "Georgia", fontSize: "30px" }}
          >
            BookStore
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact to="/dashboard" className="nav-link" style={{fontSize: "18px"}}>
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/shop" className="nav-link" style={{fontSize: "18px"}}>
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/addbook" className="nav-link" style={{fontSize: "18px"}}>
                  Add Book
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link" style={{fontSize: "18px"}}>
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/admin/users" className="nav-link" style={{fontSize: "18px"}}>
                  Users
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link" style={{fontSize: "18px"}}>
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link" style={{fontSize: "18px"}}>
                  Logout
                </NavLink>
              </li>
              {/* Add more navigation links here */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
