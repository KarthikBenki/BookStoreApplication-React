import React from "react";
import book from "../../../assets/icons/Group 5.svg";
import { useState } from "react";
import "./Login.css";
import UserRegistrationService from "../../../services/UserRegistrationService";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { Paper } from "@mui/material";

export default function Login(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [alerts, setAlerts] = useState({
    severity: "",
    message: "",
    alertFlag: false,
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
        console.log(response);
        let token = response.data.data;
        localStorage.setItem("token", token);
        localStorage.setItem("email", user.email);
        setAlerts({
          ...alerts,
          severity: "success",
          message: response.data.message,
          alertFlag: true,
        });
        props.history.push({
          pathname: "/home",
        });
      })
      .catch((error) => {
        alert(error.response.data.data);
        setAlerts({
          ...alerts,
          severity: "error",
          message: error.response.data.data,
          alertFlag: true,
        });
      });
  };

  const alertCloseHandler = (event, reason) => {
    if (reason === "clickAway") return;
    setAlerts({ ...alerts, alertFlag: false });
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
      <div className="main">
        <Paper elevation={20} className="form-content-login">
          {alerts.alertFlag && (
            <Alert onClose={alertCloseHandler} severity={alerts.severity}>
              {alerts.message}
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
            <div className="row-content-login links">
              <Link to="/signUp" className="link">
                SignUp
              </Link>
              <div>
                <Link className="link" to="/forgotPassword">
                  Forgot Password?
                </Link>
              </div>
            </div>
          </form>
        </Paper>
      </div>
    </div>
  );
}
