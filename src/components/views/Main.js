import React from "react";
import "./Main.css";
import "../../App.css";

const Main = () => {
  return (
    <section className='homepic'>
      <div className='dark-overlay'>
        <div className='homepic-inner'>
          <h1 className='largeTitle'>Running Social</h1>
          <p className='lead'>
            The social application where runners come together
          </p>
          <div className='buttons'>
            <a href='register.html' className='btn btn-primary'>
              Sign Up
            </a>
            <a href='login.html' className='btn btn-light'>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
