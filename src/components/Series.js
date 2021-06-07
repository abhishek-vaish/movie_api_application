/*
Designed By: Abhishek Vaish
Linkedin: https://www.linkedin.com/in/abhishek-vaish
Tool: VSCode (version: 1.56)
*/

import React from "react";
import SeriesJson from "../feed/Series";
import App from "./App";
import "./Series.css";

const Series = () => {
  return (
    <div>
      <App title="Popular Series">
        <div className="series">
          <SeriesJson />
        </div>
      </App>
    </div>
  );
};

export default Series;
