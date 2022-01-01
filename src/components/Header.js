/*
Designed By: Abhishek Vaish
Linkedin: https://www.linkedin.com/in/abhishek-vaish
Tool: VSCode (version: 1.56)
*/

import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="navBar">
      <div className="navBar__menu">
        <p className="navMenu__title">Demo Streaming</p>
        <div className="navMenu__button">
          <button className="navMenu__trialButton">
            Start your free trial
          </button>
        </div>
      </div>
      <div className="title__header">
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Header;
