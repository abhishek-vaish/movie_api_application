/*
Designed By: Abhishek Vaish
Linkedin: https://www.linkedin.com/in/abhishek-vaish
Tool: VSCode (version: 1.56)
*/

import React from "react";
import App from "./App";
import Card from "./Card";
import "./Home.css";

const Home = () => {
  return (
    <App title="Popular Titles">
      <div className="home">
        <div className="home__card">
          <Card title="Popular Series" link="/series" heading="Series" />
          <Card title="Popular Movies" link="/movies" heading="Movies" />
        </div>
      </div>
    </App>
  );
};

export default Home;
