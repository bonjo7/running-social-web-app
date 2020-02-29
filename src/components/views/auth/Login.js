import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {

  const [formInput, setForm] = useState({
    email: '',
    password: ''
  });

  const{
    email, 
    password
  } = formInput;

  const handleChange = e => {
    setForm({ ...formInput ,[e.target.name]: e.target.value});
  }

  const onSubmit = e => {
    e.preventDefault();
    console.log('Wooho');
  }

    return (
        <Fragment>
      <h2 className="large create-account"><i className="fas fa-user-circle"></i> Enter your login details</h2>
      <form className="form" onSubmit={ e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => handleChange(e)} />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" name="password" value={password} onChange={e => handleChange(e)} minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Do not have an account? <Link to="/register">Create Account</Link>
      </p>
      </Fragment>
    )
}

export default Login;