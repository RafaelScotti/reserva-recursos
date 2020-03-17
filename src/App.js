import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LoginPage from "./pages/login"
import HomePage from "./pages/home"
import { isAuthenticated } from "./services/Auth"
import PrivateRoute from "./services/PrivateRoute"

import "./styles.css"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        component={isAuthenticated() ? HomePage : LoginPage}
      />

      <Route
        path="/login"
        exact
        component={isAuthenticated() ? HomePage : LoginPage}
      />

      <PrivateRoute path="/home" exact component={HomePage} />
    </Switch>
  </BrowserRouter>
)

export default App
