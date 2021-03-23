import React from "react";
import { Redirect, Route } from "react-router-dom";
import Unauthorized from "./Unauthorized";
import { useAuthState } from "../Context";

const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
  const userDetails = useAuthState();
  return (
    <Route
      path={path}
      render={(props) =>
        isPrivate && !Boolean(userDetails.token) ? (
          <Unauthorized />
        ) : (
          <>
            <Component {...props} />
          </>
        )
      }
      {...rest}
    />
  );
};

export default AppRoutes;
