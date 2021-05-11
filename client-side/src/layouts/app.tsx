import Login from "../pages/login/login";
import Home from "../pages/home/home";
import React, { ReactElement } from "react";
import { Switch, Route } from "react-router-dom";
const App = (): ReactElement => {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
