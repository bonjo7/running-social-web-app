import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Auth.css';
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

 <section className='homepic'>
      <div className='dark-overlay'>
        <div className='homepic-inner'>
        <div class="login-page">
       <form className="form" onSubmit={ e => onSubmit(e)}>
      <h2 className="large create-account"><i className="fas fa-user-circle"></i> Enter your login details</h2>
      
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => handleChange(e)} />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" name="password" value={password} onChange={e => handleChange(e)} minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      
      <p className="my-1">
        Do not have an account? <Link to="/register">Register Here</Link>
      </p>
      </form>
      </div>
          </div>
        </div>
      
    </section>
    )
}

const mapStateTopProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateTopProps, {login})(Login);