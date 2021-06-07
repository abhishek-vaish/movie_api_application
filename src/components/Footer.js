/*
Designed By: Abhishek Vaish
Linkedin: https://www.linkedin.com/in/abhishek-vaish
Tool: VSCode (version: 1.56)
*/

import React from "react";
import "./Footer.css";
import appleLogo from "../assets/apple.png";
import playstoreLogo from "../assets/playstore.png";
import microsoftLogo from "../assets/microsoft.png";

const Footer = () => {
  return (
    <div className="footer__head">
      <div className="footer__content">
        <div className="content__link">
          <a href="#">Home</a>
          <p className="bar">|</p>
          <a href="#">Terms and Conditions</a>
          <p className="bar">|</p>
          <a href="#">Privacy Policy</a>
          <p className="bar">|</p>
          <a href="#">Collection Statement</a>
          <p className="bar">|</p>
          <a href="#">Help</a>
          <p className="bar">|</p>
          <a href="#">Managment Account</a>
        </div>
        <p className="content__copyright">
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </p>
      </div>
      <div className="footer__logo">
        <div className="logo__social">
          <a href="https://facebook.com">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instgram.com">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
        <div className="logo__download">
          <a href="https://apps.apple.com">
            <img src={appleLogo} alt="applestore" />
          </a>
          <a href="https://play.google.com">
            <img src={playstoreLogo} alt="playstore" />
          </a>
          <a href="https://microsoft.com">
            <img
              className="microsoft__logo"
              src={microsoftLogo}
              alt="microsoft"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
