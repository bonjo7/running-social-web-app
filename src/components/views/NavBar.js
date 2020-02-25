import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl
} from "react-bootstrap";
import "./NavBar.css";
import { Link} from 'react-router-dom'

const NavBar = () => {
  return (
    // <nav class="navbar bg-dark">
    //   <h4>
    //     <a href="index.html"> Running Social</a>
    //   </h4>
    //   <ul>
    //     <li><a href="members.html">Members</a></li>
    //     <li><a href="events.html">Events</a></li>
    //     <li><a href="login.html">Login</a></li>
    //   </ul>
    // </nav>
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand>
      <Link to='/'> Running Social <i class="fas fa-running"></i></Link>
      </Navbar.Brand>
      <Nav className='mr-auto'></Nav>
      <Form inline>
        <Link to='/members'>Members</Link>
        <Link to='/events'>Events</Link>
        <Link to='/login'>Login </Link>
      </Form>
    </Navbar>
  );
};

export default NavBar;
