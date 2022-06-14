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

export default function Home() {
  const [bookDetails, setBookDetails] = useState([]);

  useEffect(() => {
    fetchBookDetails();
  });

  function fetchBookDetails() {
    BookService.getAllBooks()
      .then((response) => {
        setBookDetails(response.data.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
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

      <h1>Welcome to Book Store {localStorage.getItem('email')}</h1>

      <div className="wrapper">
        {
          bookDetails.map((book)=>{
              return (
                <Card image={book.imageURL}
                 title={book.bookName}
                  description = {book.description}
                  rating={book.rating}
                  quantity={book.quantity} 
                  id={book.bookId}
                  price={book.bookPrice}
                  author={book.authorName}/>
                  
                  
                 
              )
          })
        }
        {/* <Card image={book1} title="Attitude" />
        <Card image={book2} title="Peace for Money" />
        <Card image={book3} title="Cool Summer" />
        <Card image={book3} title="Cool Summer" />
        <Card image={book3} title="Cool Summer" />
        <Card image={book3} title="Cool Summer" />
        <Card image={book3} title="Cool Summer" />
        <Card image={book3} title="Cool Summer" />
        <Card image={book3} title="Cool Summer" />
        <Card image={book3} title="Cool Summer" /> */}
      </div>
    </div>
  );
}
