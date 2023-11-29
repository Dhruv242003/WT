// Users.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "../Model/User";
import Navbar from "./Navbar";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/users/get")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

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
          Users Admin
        </h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>
                        <button type="button" className="btn btn-primary">
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
    </div>
  );
};

export default Users;
