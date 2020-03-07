import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './Auth.css';
import '../../../App.css';
import axios from 'axios';
import cloudURL from '../../../services/cloud';
import { setAlert } from '../../../actions/alert';
import {register} from '../../../actions/auth';


const Register = (props) => {

  const [formInput, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const{
    name, 
    email, 
    password, 
    confirmPassword
  } = formInput;

  const handleChange = e => {
    setForm({ ...formInput ,[e.target.name]: e.target.value});
  }

  const onSubmit = async e => {
    e.preventDefault();
    if(password !== confirmPassword){
      props.setAlert('Passwords do not match', 'danger');
      console.log('Passwords do not match');
    }
    else{
      props.register({name, email, password});
      console.log('Register success');
      props.history.push('/login');
      // const newUser ={
      //   name,
      //   email,
      //   password
      // }

      // try{

      //   const config ={
      //     headers: { 'Content-Type': 'application/json'}
      //   }

      //   const body = JSON.stringify(newUser);

      //   const res = await axios.post(cloudURL() + '/lib/routes/users',body, config);
        
      //   console.log(res);
      //   props.history.push('/login');
      // }catch (error){
      //   console.log(error.response.data);
      // }
    }
  }

    return (
        <Fragment>
      <h2 className="large create-account"><i className="fas fa-user-circle"></i> Create Your Account</h2>
      <form className="form" onSubmit={ e => onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={e => handleChange(e)} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => handleChange(e)} required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" name="password" value={password} onChange={e => handleChange(e)} minLength="6" required
          />
        </div>
        <div className="form-group">
          <input
            type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={e => handleChange(e)} minLength="6" required
          />
         
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
      </Fragment>
    )
}

export default connect(null, { setAlert, register}) (Register);
