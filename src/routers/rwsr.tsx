import React from "react";
import { Route } from "react-router-dom";

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component store={route.store} routes={route.routes} {...props} />
      )}
    />
  );
}

export default RouteWithSubRoutes;