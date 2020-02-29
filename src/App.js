import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/views/NavBar";
import Main from "./components/views/Main";
import Login from "./components/views/Login";
import Events from "./components/views/Events";
import Register from "./components/views/Register";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => (
  
  <Router>
  <Fragment>
    <NavBar />
    <Route exact path="/" component={ Main} />
    <section className="container">
    <Switch>
    <Route exact path="/login" component={ Login} />
    <Route exact path="/register" component={ Register} />
    <Route exact path="/events" component={ Events} />
    </Switch>
    </section>
  </Fragment>
  </Router>
);

export default App;
