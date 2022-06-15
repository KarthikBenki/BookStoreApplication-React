import React from "react";
import { Link } from "react-router-dom";
import book from "../../assets/icons/Group 5.svg";
import Footer from "../Footer/Footer";


import './DashBoardHomePage.css'

const DashBoardHomePage = (props) =>{

    return (
<div className="container">
<header className="header">
        {/* <div className="logo-content-home"> */}
        <div className="header__logo__content">
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
      
      <div className="main-content">

      </div>
      <Footer/>
     
      
</div>

    )
}

export default DashBoardHomePage;