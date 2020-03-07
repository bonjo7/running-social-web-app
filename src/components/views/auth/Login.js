import React, {Fragment, useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Auth.css';
import axios from 'axios';
import cloudURL from '../../../services/cloud';
import {connect} from 'react-redux';
import {login} from '../../../actions/auth';

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

    props.login(email, password);
    // const user ={
    //   email,
    //   password
    // }

    // try{

    //   const config ={
    //     headers: { 'Content-Type': 'application/json'}
    //   }

    //   const body = JSON.stringify(user);

    //   const res = await axios.post(cloudURL() + '/lib/routes/auth',body, config);
    //   axios.defaults.headers.common[''] = res.data.token;
    //   console.log(res)
    //   props.history.push('/register')
    // }catch (error){
    //   console.log(error.response.data);
    // }
  }

  if(props.isAuthenticated){
    return <Redirect to='/dashboard' />
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
      {/* <div class="login-page">
  <div class="form">
   
    <form className="login-form" onSubmit={ e => onSubmit(e)}>
    <h2 className="large create-account"><i className="fas fa-user-circle"></i> Enter your login details</h2>
      <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => handleChange(e)}/>
      <input type="password" placeholder="password" name="password" value={password} onChange={e => handleChange(e)} minLength="6"/>
      <input type="submit" className="primary" value="Login" />
      <p class="message">Not registered? <Link to="/register">Register Here</Link></p>
    </form> */}
  {/* </div> */}
{/* </div> */}
      </Fragment>
    )
}

const mapStateTopProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateTopProps, {login})(Login);