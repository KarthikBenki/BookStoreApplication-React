import React from "react";
import book from "../../assets/icons/Group 5.svg";
import { Button, Paper, Typography } from "@mui/material";
import "./DashBoardHomePage.css";
import { Container } from "@mui/system";

const DashBoardHomePage = (props) => {
  const openLogin = () => {
    props.history.push({
      pathname: "/login",
    });
  };

  const openSignUp = () => {
    props.history.push({
      pathname: "/signUp",
    });
  };

  return (
   
      <div>
        <header className="header">
          {/* <div className="logo-content-home"> */}
          <div className="header__logo__content">
            <img
              src={book}
              alt="logo-content"
              className="logo-content-img"
              width=""
            />
            <div className="logo-content-home-buttons">
              <Button sx={{mr:'10px',ml:'10px'}} variant="contained" onClick={openLogin}>
                {" "}
                Login{" "}
              </Button>
              <Button sx={{mr:'10px',ml:'10px'}} variant="contained" onClick={openSignUp}>
                {" "}
                SignUp{" "}
              </Button>
            </div>
          </div>
        </header>

        <Paper elevation={10} className="main-content">
          <header>
            <Typography variant="h2" component={'h1'}>Welcome To Book Store </Typography>
          </header>
         
        </Paper>
      </div>
  
  );
};

export default DashBoardHomePage;
