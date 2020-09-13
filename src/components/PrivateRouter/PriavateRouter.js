import React from 'react';
import { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import { UserContext } from '../../App';

const PriavateRouter = (children,...rest) => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Route
      {...rest}
      render={({ location }) =>
      loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PriavateRouter;