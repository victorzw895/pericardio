import React from "react";
import { Route, Switch } from "react-router-dom";

import Pericardio from "./Pages/Pericardio";
import Contactanos from "./Pages/Contactanos";
import Blog from "./Pages/Blog";
import Servicios from "./Pages/Servicios";
import Productos from "./Pages/Productos";
import Login from "./Pages/Login";

const Routes = (
  <Switch>
    <Route exact path="/" component={Pericardio} />
    <Route path="/pericardio" component={Pericardio} />
    <Route path="/contactanos" component={Contactanos} />
    <Route path="/blog" component={Blog} />
    <Route path="/servicios" component={Servicios} />
    <Route path="/productos" component={Productos} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Routes;
