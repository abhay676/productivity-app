import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import NavBar from "components/NavBar/NavBar";
import Home from "components/Home";
import Auth from "components/Auth";
import Register from "components/Auth/Register";
const CustomRoutes = () => (
  <>
    <NavBar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Auth} />
      <Route path="/register" exact component={Register} />
    </Switch>
  </>
);

export default CustomRoutes;
