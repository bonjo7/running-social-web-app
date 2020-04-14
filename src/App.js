import React, { Fragment, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/Views/NavBar";
import Main from "./Components/Views/Main";
import Login from "./Components/Views/Auth/Login";
import Events from "./Components/Views/Events";
import Dashboard from './Components/Views/Dashboard'
import Register from "./Components/Views/Auth/Register";
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
import Profiles from './Components/Views/Profiles/Profiles';
import Profile from './Components/Views/UserProfile/Profile';
import Posts from './Components/Views/Posts/Posts';
import Post from './Components/Views/Posts/SinglePost'


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
    <PrivateRoute exact path="/profiles" component={Profiles}/>
    <PrivateRoute exact path="/profile/:id" component={Profile}/>
    <PrivateRoute exact path="/posts" component={Posts}/>
    <PrivateRoute exact path="/post/:id" component={Post}/>
    </Switch>

    <Alert />
    
    </section>
  </Fragment>
  </Router>
  </Provider>
)};

export default App;
