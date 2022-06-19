import React, { useEffect } from "react";
import book from "../../../assets/icons/Group 5.svg";
import { Link } from "react-router-dom";
import "./Home.css";
import Card from "../../Book/Card/Card";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import BookService from "../../../services/BookService";
import { useState } from "react";
import BasicSelect from "../../utils/Select";
import cart from "../../../assets/icons/trolley.png";

export default function Home() {
  const [bookDetails, setBookDetails] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchBookDetails();
  });

  function fetchBookDetails() {
    if (filter === "")
      if (sortType === "DATABASE" || sortType === "")
        BookService.getAllBooks()
          .then((response) => {
            setBookDetails(response.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
  }

  const getSelectValue = (value) => {
    setSortType(value);
    if (value === "ASCENDING") {
      BookService.getAllInIncreasingOrder()
        .then((response) => {
          console.log(response);
          setBookDetails(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (value === "DESCENDING") {
      BookService.getAllInDecreasingOrder()
        .then((response) => {
          setBookDetails(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (value === "NEW_LAUNCH") {
      BookService.getBooksByNewLaunch()
        .then((response) => {
          setBookDetails(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (value === "PUBLISHED_YEAR") {
      BookService.getBooksByPublishingYear()
        .then((response) => {
          setBookDetails(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
    BookService.getFilterBooks(filter)
      .then((response) => {
        setBookDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <header className="header-content header">
        <div className="logo-content-home">
          <img
            src={book}
            alt="logo-content"
            className="logo-content-img"
            width=""
          />

          <div className="search-bar">
            <input
              className="search"
              placeholder="Search..."
              name="filter"
              value={filter}
              onChange={searchHandler}
            ></input>
          </div>
          <span className="logo-content-home-links">
            <Link
              style={{ marginRight: "10px" }}
              className="login-link link"
              to="/addBook"
            >
              AddBook{" "}
            </Link>
            <div className="cart-image-container">
              <Link to="/cart">
                <img className="cart-image" src={cart} alt="cart-img" />
              </Link><span>{}</span>
            </div>
          </span>
        </div>
      </header>
      <div className="welcome_header">
        <h2>Welcome to Book Store {localStorage.getItem("email")}</h2>
      </div>

      <div className="book_count_sort_header">
        <span className="books__count">
          {"Books Count : " + bookDetails.length}
        </span>
        <BasicSelect
          headerName="Search By Relevance"
          className="home__select"
          getSelectValue={getSelectValue}
        />
      </div>

      <div className="wrapper">
        {bookDetails.map((book) => {
          return (
            <div key={book.bookId}>
              <Card
                image={book.imageURL}
                title={book.bookName}
                description={book.description}
                rating={book.rating}
                quantity={book.quantity}
                id={book.bookId}
                price={book.bookPrice}
                author={book.authorName}
                button1="ADD TO BAG"
                button2="WISHLIST"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
