import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1 style={{ textAlign: "left" }}>i am a ghanaian and a ...</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-10.avif"
              text="dartmouth electrical engineering and computer science student"
              path="/about"
            />
            <CardItem
              src="images/img-12.avif"
              text="software engineer experienced in software design and implementation, web development"
              path="/about"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-11.avif"
              text="photographer passionate about problem-solving and innovation"
              path="/about"
            />
            <CardItem
              src="images/img-13.avif"
              text="fan of chopin, stromae, boticelli, ronaldo, and naruto"
              path="/projects"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
