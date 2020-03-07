import React, { Fragment, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/views/NavBar";
import Main from "./components/views/Main";
import Login from "./components/views/auth/Login";
import Events from "./components/views/Events";
import Register from "./components/views/auth/Register";
import Alert from "./components/Alert";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { loadUser } from './services/auth';
//Redux imports
import { Provider } from 'react-redux';
import store from './reduxStore/store';
import cloudURL from './services/cloud';
import authToken from './services/authToken';


if(localStorage.token){
  authToken(localStorage.token);
};


const App = () => { 

  useEffect(() =>  {
    store.dispatch(loadUser());
  });

  return(
  console.log('Connected to cloud url at: ' + cloudURL()),
  <Provider store = {store}>
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
    <Alert />
    </section>
  </Fragment>
  </Router>
  </Provider>
)};

export default App;
