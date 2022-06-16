import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./component-ui/login";


const ProtectedRoute = ({ auth, component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth) return <Login {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
