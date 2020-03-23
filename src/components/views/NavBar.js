import React, {Fragment} from "react";
import {
  Navbar,
  Nav,
  Form
} from "react-bootstrap";
import "./NavBar.css";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../actions/auth';
import PropTypes from 'prop-types';


const NavBar = ({auth: {isAuthenticated, loading}, logout}) => {

  const userLinks = (
    <Fragment>
    <Link to='/events'>Events</Link>
    <Link to='/dashboard'>Dashboard</Link>
    <Link onClick={logout} to='/'>Logout </Link>
    </Fragment>
  );
    

  const nonUserLinks = (
    <Fragment>
    <Link to='/members'>Members</Link>
    <Link to='/events'>Events</Link>
    <Link to='/login'>Login </Link>
    </Fragment>
  );
  
  return (
    <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'>
      <Navbar.Brand>
      <Link to='/'> Running Social <i className="fas fa-running"></i></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='mr-auto'></Nav>
      <Form inline>
        {!loading && (<Fragment>{isAuthenticated ? userLinks : nonUserLinks}</Fragment>)}
        
      </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logout}) (NavBar);
