/*
Designed By: Abhishek Vaish
Linkedin: https://www.linkedin.com/in/abhishek-vaish
Tool: VSCode (version: 1.56)
*/

import React from "react";
import MoviesJson from "../feed/Movies";
import App from "./App";
import "./Movies.css";

const Movies = () => {
  return (
    <App title="Popular Movies">
      <div className="movies">
        <MoviesJson />
      </div>
    </App>
  );
};

export default Movies;
