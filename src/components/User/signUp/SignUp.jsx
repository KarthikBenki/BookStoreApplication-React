import React, { useState } from "react";
import book from "../../../assets/icons/Group 5.svg";
import "./SignUp.css";
import UserRegistrationService from "../../../services/UserRegistrationService";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SignUp() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    kyc: "",
    dob: "",
    email: "",
    role: "",
    password: "",
    createdDate: "",
    isVerified: false,
  });

  const signUp = (e) => {
    e.preventDefault();
    let userData = {
      firstName: user.firstName,
      lastName: user.lastName,
      kyc: user.kyc,
      dob: user.dob,
      email: user.email,
      password: user.password,
      role: user.role,
    };

    UserRegistrationService.registerUser(userData)
      .then((response) => {
        alert(response);
        alert("submitted successfully");
      })
      .catch((response) => {
        alert(response.response.data.data);
      });
  };

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log([name] + " ", value);
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      firstName: "",
      lastName: "",
      kyc: "",
      dob: "",
      email: "",
      password: "",
      phone: "",
      createdDate: "",
      isVerified: false,
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
        <form
          action="#"
          className="form"
          onSubmit={signUp}
          onReset={resetHandler}
        >
          <div className="form-head-content">
            <div className="form-head">BookStore SignUp</div>
          </div>

          <div className="row-content">
            <TextField
              className="input"
              label="FirstName*"
              type="text"
              id="outlined-required"
              placeholder="FirstName*"
              name="firstName"
              value={user.firstName}
              onChange={handleUserInput}
            />
            <TextField
              className="input"
              type="text"
              placeholder="LastName*"
              label="LastName*"
              name="lastName"
              value={user.lastName}
              onChange={handleUserInput}
            />
          </div>

          <div className="row-content">
            <TextField
              className="input"
              type="text"
              placeholder="email*"
              label="email*"
              name="email"
              value={user.email}
              onChange={handleUserInput}
            />
            <TextField
              className="input"
              type="password"
              placeholder="password*"
              label="Password*"
              name="password"
              value={user.password}
              onChange={handleUserInput}
            />
          </div>

          <div className="row-content">
            <TextField
              className="input"
              type="password"
              placeholder="Confirm password*"
              label="Confirm password*"
              name="password"
              value={user.password}
              onChange={handleUserInput}
            />
            <TextField
              className="input"
              type="text"
              placeholder="Role*"
              label="Role *"
              name="role"
              value={user.role}
              onChange={handleUserInput}
            />
          </div>

          <div className="row-content">
            <TextField
              className="input"
              // type="date"
              type="text"
              label="Date Of Birth*"
              placeholder="yyyy-MM-dd"
              name="dob"
              value={user.dob}
              onChange={handleUserInput}
            />
            <TextField
              className="input"
              type="text"
              placeholder="KYC*"
              label="KYC*"
              name="kyc"
              value={user.kyc}
              onChange={handleUserInput}
            />
          </div>

          <div className="row-content">
            <Button
              type="submit"
              className="submit-button button addButton"
              variant="contained"
              color="success"
            >
              SignUp
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
          <div className="row-content">
            <Link to="/login" className="link">
              Click Here to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
