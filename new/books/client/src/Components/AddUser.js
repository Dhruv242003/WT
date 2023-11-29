import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

import "../addUser.css"

import registrationImage from "../book-register-image.jpg";

const AddUser = () => {
  const [user, setUser] = useState({
    name: "",
    type: "",
    password: "",
  });

  const navigate = useNavigate(); // Get access to the navigate function

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const addUser = () => {
    axios
      .post("http://localhost:8080/users/add", user)
      .then((response) => {
        console.log("User added successfully:", response.data);
        // After successful addition, navigate to localhost/dashboard
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  // return (
  //   <div>
  //     <Navbar />
  //     <h1>Add User</h1>
  //     <form>
  //       <label htmlFor="name">Name</label>
  //       <input
  //         type="text"
  //         className="form-control"
  //         id="name"
  //         placeholder="User name"
  //         name="name"
  //         value={user.name}
  //         onChange={handleInputChange}
  //       />

  //       <label htmlFor="type">Type</label>
  //       <input
  //         type="text"
  //         className="form-control"
  //         id="type"
  //         placeholder="Type name"
  //         name="type"
  //         value={user.type}
  //         onChange={handleInputChange}
  //       />

  //       <label htmlFor="password">Password</label>
  //       <input
  //         type="password"
  //         className="form-control"
  //         id="password"
  //         placeholder="Password"
  //         name="password"
  //         value={user.password}
  //         onChange={handleInputChange}
  //       />

  //       <br />
  //       <button type="button" className="btn btn-success" onClick={addUser}>
  //         Save
  //       </button>
  //     </form>
  //   </div>
  // );

  return (
    <div className="body-addUser">
      <Navbar />
      <section className="Form my-3 mx-5">
        <div className="container">
          <div className="row addUser-row no-gutters">
            <div className="img-rowregister col-lg-5">
              <img src={registrationImage} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-7 px-5 pt-5">
              {/* <h1 className="font-weight-bold py-3">Logo</h1> */}
              <h2>Sign Up</h2>
              <form>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      className="form-control my-3 p-2"
                      type="text"
                      placeholder="Name"
                      name="name"
                      onChange={handleInputChange}
                      value={user.name}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      className="form-control my-3 p-2"
                      type="text"
                      placeholder="Type Name"
                      name="email"
                      onChange={handleInputChange}
                      value={user.type}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <input
                      className="form-control my-3 p-2"
                      type="text"
                      placeholder="Password"
                      name="password"
                      onChange={handleInputChange}
                      value={user.password}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button
                      type="submit"
                      value="Register"
                      className="btn1 mt-3 mb-5"
                      onClick={addUser}
                    >
                      Register
                    </button>
                  </div>
                </div>
                <p>
                  Already have an account?{" "}
                  <NavLink to="/login" className="registernowa">
                    Sign In
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddUser;
