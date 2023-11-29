import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Components/Users";

import "bootstrap/dist/css/bootstrap.min.css";  


import "./App.css";

import Navbar from "./Components/Navbar";
import AddUser from "./Components/AddUser";
import Books from "./Components/Books";
import AddBook from "./Components/AddBook";
import ShopBook from "./Components/ShopBook";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/users" exact element={<Users />}></Route>
          <Route path="/register" exact element={<AddUser />}></Route>
          <Route path="/addbook" exact element={<AddBook />}></Route>
          <Route path="/dashboard" exact element={<Books />}></Route>
          <Route path="/shop" exact element={<ShopBook />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
};

export default App;
