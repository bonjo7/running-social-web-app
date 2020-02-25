import React from "react";
import "./Main.css";
import "../../App.css";
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <section className='homepic'>
      <div className='dark-overlay'>
        <div className='homepic-inner'>
          <h1 className='largeTitle'>Running Social <i class="fas fa-running"></i></h1>
          <p className='lead'>
            The social application where runners come together
          </p>
          <div className='buttons'>
            <Link to='/login' className='btn btn-primary'>
              Sign In</Link>
            <Link to='/register' className='btn btn-light'>
              Register</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
