import React from "react";
import { Link } from "react-router-dom";
import book from "../../../assets/icons/Group 5.svg";
import "./AddBook.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export default function AddBook() {
  const [rating, setRating] = useState(1);

  const [bookDetails,setBookDetails] = useState({
    "authorName": "",
  "bookName": "",
  "bookPrice": 0,
  "description": "",
  "imageURL": "",
  "publishingYear": 0,
  "quantity": 0,
  "rating": 0
  })

  const addBookHandler = (e)=>{
    
  }
  return (
    <div className="container-addbook">
      <header className="header-content header">
        <div className="logo-content-home">
          <img
            src={book}
            alt="logo-content"
            className="logo-content-img"
            width=""
          />
          <span className="logo-content-home-links">
            <Link className="login-link link" to="/login">
              login{" "}
            </Link>
            <Link className="signUp-link link" to="/signUp">
              signup
            </Link>
          </span>
        </div>
      </header>

      <div className="form-content">
        <form action="#" className="form" onSubmit={addBookHandler}>
          <div className="form-head-content">
            <div className="form-head">BookStore AddBook</div>
          </div>
          <div className="row-content">
            <TextField
              className="input"
              label="BookName*"
              type="text"
              placeholder="bookName*"
              name="bookName"
              // value={user.firstName}
              // onChange={handleUserInput}
            />
            <TextField
              className="input"
              label="AuthorName*"
              type="text"
              placeholder="authorName*"
              name="authorName"
              // value={user.firstName}
              // onChange={handleUserInput}
            />
          </div>

          <div className="row-content">
            <TextField
              className="input"
              label="Description"
              multiline
              rows={4}
              name="description"
              placeholder="description"
            />

            <div className="input">
              <Typography component="legend">Rating</Typography>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
            </div>
          </div>

          <div className="row-content">
            <FormControl className="input">
              <InputLabel htmlFor="outlined-adornment-amount">
                Book Price
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                // value={values.amount}
                // onChange={handleChange('amount')}
                startAdornment={
                  <InputAdornment position="start">₹</InputAdornment>
                }
                label="Book Price"
              />
            </FormControl>

            <TextField
              className="input"
              label="Quantity*"
              type="number"
              placeholder="Quantity*"
              name="quantity"
              // value={user.firstName}
              // onChange={handleUserInput}
            />
          </div>

          <div className="row-content">
            <TextField
              className="input"
              label="Publishing Year*"
              type="year"
              placeholder="Publishing Year*"
              name="publishingYear"
              // value={user.firstName}
              // onChange={handleUserInput}
            />

            <TextField
              className="input"
              label="ImageURL*"
              type="text"
              placeholder="ImageURL*"
              name="imageURL"
              // value={user.firstName}
              // onChange={handleUserInput}
            />
          </div>
          <div className="row-content">
            <Button
              type="submit"
              className="submit-button button addButton"
              variant="contained"
              color="success"
            >
              Add Book
            </Button>
            <Button
              type="reset"
              className="reset-button button resetButton"
              variant="contained"
              color="success"
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
