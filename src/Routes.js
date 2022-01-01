import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Login from "./components/Login";
import Signup from "./components/Signup";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Home} />
        <Route path="/series" component={Series} />
        <Route path="/movies" component={Movies} />
        <Route path="/register" component={Signup} />
      </Switch>
    </Router>
  );
};

export default Routes;
