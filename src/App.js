import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/views/NavBar";
import Main from "./components/views/Main";

const App = () => (
  <Fragment>
    <NavBar />
    <Main />
  </Fragment>
);

export default App;
