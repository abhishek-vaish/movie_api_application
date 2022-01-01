/*
Designed By: Abhishek Vaish
Linkedin: https://www.linkedin.com/in/abhishek-vaish
Tool: VSCode (version: 1.56)
*/

import React from "react";
import "./Card.css";
import classnames from "classnames";

const Card = (props) => {
  const cardClass = classnames("card", props.heading);

  return (
    <div className={cardClass}>
      <a className="card__link" href={props.link}>
        {props.img != null ? (
          <img className="card__image" src={props.img} alt="poster" />
        ) : (
          <div className="card__rectangle">
            {props.heading !== null ? (
              <p className="card__heading">{props.heading}</p>
            ) : (
              ""
            )}
          </div>
        )}
        <p className="card__title">{props.title}</p>
      </a>
    </div>
  );
};

export default Card;
