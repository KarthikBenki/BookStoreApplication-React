import React from "react";
import book from "../../assets/icons/Group 5.svg";
import { useState } from "react";
import "./Login.css";
import UserRegistrationService from "../../services/UserRegistrationService";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";


export default function Login() {
  const [success, setSuccess] = useState("");
  const [failure, setFailure] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLoginInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    let loginUser = {
      email: user.email,
      password: user.password,
    };
    UserRegistrationService.loginUser(loginUser)
      .then((response) => {
        // alert(response.data.message);
        console.log(response)
        let token = response.data.data;
        localStorage.setItem('token',token);
        setSuccess(response.data.message);
      })
      .catch((error) => {
        alert(error.response.data.data);
        setFailure(error.response.data.data);
      });
  };
  return (
    <div>
      <header className="header-content header">
        <div className="logo-content">
          <img
            src={book}
            alt="logo-content"
            className="logo-content-img"
            width=""
          />
        </div>
        
      </header>

      <div className="form-content-login">
        {success && (
          <Alert  onClose={() => {setSuccess("")}} severity="success">
            {success}
          </Alert>
        )}

        {failure && (
          <Alert onClose={() => {setFailure("")}} severity="error">
            {failure}
          </Alert>
        )}
        <form action="" className="form-login" onSubmit={loginHandler}>
          <div className="form-head-content">
            <div className="form-head">BookStore Login</div>
          </div>
          <div className="row-content-login">
           
            <TextField
              required
              type="text"
              id="outlined-required"
              label="Email"
              name="email"
              className="input-login"
              onChange={handleLoginInput}
            />
          </div>
          <div className="row-content-login">
           
            <TextField
              id="outlined-password-input"
              label="Password *"
              type="password"
              name="password"
              className="input-login"
              autoComplete="current-password"
              onChange={handleLoginInput}
            />
          </div>

          <div className="row-content-login">
           

            <Button
              type="submit"
              className="login"
              variant="contained"
              color="success"
            >
              Login
            </Button>
          </div>
          <div className="row-content-login">
            <Link to="/signUp" className="link">
              Click Here to SignUp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
