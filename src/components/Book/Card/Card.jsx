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
          <img
            className="card__image"
            src={(props.image && props.image) || book1}
            alt=""
          />
        </div>
        <div className="card__title__author">
          <h2 className="card__title">{props.title}</h2>
          <span className="card__author">by {props.author}</span>
        </div>
        <span className="card__price">Rs.{props.price}</span>
        <span className="card__rating"> {"rating: "+props.rating}</span>
      </div>
      <div className="card__button">
        <button className="card__add_button">ADD TO BAG</button>
        <button className="card__wishlist_button">WISHLIST</button>
      </div>
    </div>
  );
}
