import React, { useEffect } from "react";
import book from "../../../assets/icons/Group 5.svg";
import { Link } from "react-router-dom";
import "./Home.css";
import Card from "../../Book/Card/Card";
import book1 from "../../../assets/images/bookimages/Image 11.png";
import book2 from "../../../assets/images/bookimages/Image 18.png";
import book3 from "../../../assets/images/bookimages/Image 22.png";
import BookService from "../../../services/BookService";
import { useState } from "react";
import BasicSelect from "../../utils/Select";

export default function Home() {
  const [bookDetails, setBookDetails] = useState([]);
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    fetchBookDetails();
  });

  function fetchBookDetails() {
    if(sortType==="DATABASE"||sortType==="")
    BookService.getAllBooks()
      .then((response) => {
        setBookDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const getSelectValue = (value)=>{
    setSortType(value)
    if(value==="ASCENDING"){
      BookService.getAllInIncreasingOrder()
      .then((response) => {
        setBookDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }else if(value ==="DESCENDING"){
      BookService.getAllInDecreasingOrder()
      .then((response) => {
        setBookDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }else if(value ==="NEW_LAUNCH"){
      BookService.getBooksByNewLaunch()
      .then((response) => {
        setBookDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }else if(value ==="PUBLISHED_YEAR"){
      BookService.getBooksByPublishingYear()
      .then((response) => {
        setBookDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }

  }
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
          <span className="logo-content-home-links">
            <Link className="login-link link" to="/addBook">
              AddBook{" "}
            </Link>
            <Link className="signUp-link link" to="/signUp">
              signup
            </Link>
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
          getSelectValue = {getSelectValue}
        />
      </div>

      <div className="wrapper">
        {bookDetails.map((book) => {
          return (
            <Card
              image={book.imageURL}
              title={book.bookName}
              description={book.description}
              rating={book.rating}
              quantity={book.quantity}
              id={book.bookId}
              price={book.bookPrice}
              author={book.authorName}
            />
          );
        })}
      </div>
    </div>
  );
}
