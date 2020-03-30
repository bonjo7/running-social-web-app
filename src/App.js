import React, { Fragment, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/views/NavBar";
import Main from "./Components/views/Main";
import Login from "./Components/views/auth/Login";
import Events from "./Components/views/Events";
import Dashboard from './Components/views/Dashboard'
import Register from "./Components/views/auth/Register";
import Alert from "./Components/Alert";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { loadUser } from './Actions/Auth';
//Redux imports
import { Provider } from 'react-redux';
import store from './ReduxStore/Store';
import cloudURL from './Services/Cloud';
import authToken from './Services/AuthToken';
import PrivateRoute from './Components/Routes/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';


if(localStorage.token){
  authToken(localStorage.token);
};


const App = () => { 

  useEffect(() =>  {
    store.dispatch(loadUser());
  }, []);

  return(
  console.log('Connected to cloud url at: ' + cloudURL()),
  <Provider store = {store}>
  <Router>
  <Fragment>
    <NavBar />
    <Route exact path="/" component={ Main} />
    <Route exact path="/login" component={ Login} />
    <Route exact path="/register" component={ Register} />
    <section className="container">
    
    <Switch>
    <Route exact path="/events" component={ Events} />
    <PrivateRoute exact path="/dashboard" component={ Dashboard} />
    </Switch>

    <Alert />
    
    </section>
  </Fragment>
  </Router>
  </Provider>
)};

export default App;
