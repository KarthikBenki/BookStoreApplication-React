import React from "react";
import book1 from "../../../assets/images/bookimages/Image 11.png";
import book2 from "../../../assets/images/bookimages/Image 18.png";
import book3 from "../../../assets/images/bookimages/Image 22.png";
import "./Card.css";

export default function Card(props) {
  return (
    <div key={props.id} className="bookCard">
      <div className="card__body">
        <div className="card__image__container">
        <img className="card__image" src={props.image&&props.image||book1} alt="" />
        </div>
        
        <h2 className="card__title">{props.title}</h2>
        <text className="card__author">by {props.author}</text>
        <span className="card__price">Rs.{props.price}</span>
       
        {/* <p className="card__decription"> </p> */}
      </div>
      <div className="card__button">
      <button className="card__add_button">ADD TO BAG</button>
      <button className="card__wishlist_button">WISHLIST</button>
      </div>
      
    </div>
  );
}
