import React, { Component } from "react";
import Axios from "axios"; // Import Axios

import Navbar from "./Navbar";

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: {
        name: "",
        author: "",
        price: "",
      },
      error: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      book: {
        ...prevState.book,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { book } = this.state;

    // Make a POST request using Axios
    Axios.post("http://localhost:8080/books/add", book)
      .then((response) => {
        // Handle success
        console.log("Book added:", response.data);
        // Reset the form
        this.setState({
          book: {
            name: "",
            author: "",
            price: "",
          },
          error: null,
        });
        // Optionally, you can redirect the user to another page
        // this.props.history.push('/books');
      })
      .catch((error) => {
        // Handle error
        console.error("Error adding book:", error);
        this.setState({ error });
      });
  };

  render() {
    const { book, error } = this.state;

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
            Add Book
          </h1>
        </div>

        <div className="container mt-5 border p-4 rounded">
          <form onSubmit={this.handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <h5>Book Name</h5>
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={book.name}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <h5>Book Author</h5>
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={book.author}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <h5>Book Price</h5>
              </div>
              <div className="col-md-3">
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={book.price}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-dark mt-3">
                Add Book
              </button>
              {error && <p>Error adding book: {error.message}</p>}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddBook;
