import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Series from "./components/Series";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/series" component={Series} />
        <Route path="/movies" component={Movies} />
      </Switch>
    </Router>
  );
};

export default Routes;
