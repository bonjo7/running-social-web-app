import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/views/NavBar";
import Main from "./components/views/Main";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => (
  
  <Router>
  <Fragment>
    <NavBar />
    <Route exact path="/" component={ Main} />
    <Switch>
    <Route exact path="/login" component={ Login} />
    <Route exact path="/register" component={ Register} />
    </Switch>
  </Fragment>
  </Router>
);

export default App;
