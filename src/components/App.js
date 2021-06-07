/*
Designed By: Abhishek Vaish
Linkedin: https://www.linkedin.com/in/abhishek-vaish
Tool: VSCode (version: 1.56)
*/

import React from "react";
import Footer from "./Footer";
import "./App.css";
import Header from "./Header";

const App = ({ children, title }) => {
  return (
    <div className="movieApp">
      <Header title={title} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default App;
