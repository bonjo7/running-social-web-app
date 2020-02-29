import React from "react";
import {
  Navbar,
  Nav,
  Form
} from "react-bootstrap";
import "./NavBar.css";
import { Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark'>
      <Navbar.Brand>
      <Link to='/'> Running Social <i class="fas fa-running"></i></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='mr-auto'></Nav>
      <Form inline>
        <Link to='/members'>Members</Link>
        <Link to='/events'>Events</Link>
        <Link to='/login'>Login </Link>
        
      </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
