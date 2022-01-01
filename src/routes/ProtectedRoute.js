import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <Route
        {...restOfProps}
        render={() => (user ? <Component /> : <Redirect to="/login" />)}
      />
    </div>
  );
};

export default ProtectedRoute;
