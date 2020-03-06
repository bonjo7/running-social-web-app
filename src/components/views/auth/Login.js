import React, {Fragment, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Auth.css';
import axios from 'axios';
import cloudURL from '../../../services/cloud';

const Login = (props) => {

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

  const onSubmit = async e => {
    e.preventDefault();

    const user ={
      email,
      password
    }

    try{

      const config ={
        headers: { 'Content-Type': 'application/json'}
      }

      const body = JSON.stringify(user);

      const res = await axios.post(cloudURL() + '/lib/routes/auth',body, config);
      axios.defaults.headers.common[''] = res.data.token;
      console.log(res)
      props.history.push('/register')
    }catch (error){
      console.log(error.response.data);
    }
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
        Do not have an account? <Link to="/register">Register Here</Link>
      </p>
      </Fragment>
    )
}

export default Login;