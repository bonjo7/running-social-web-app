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
      <Navbar.Brand href='#home'>Running Social</Navbar.Brand>
      <Nav className='mr-auto'></Nav>
      <Form inline>
        <Nav.Link href='members.html'>Members</Nav.Link>
        <Nav.Link href='events.html'>Events</Nav.Link>
        <Nav.Link href='login.html'>Login</Nav.Link>
      </Form>
    </Navbar>
  );
};

export default NavBar;
