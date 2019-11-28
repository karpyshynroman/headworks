import React from 'react';
import {Button, Form, Image, Nav, Navbar} from "react-bootstrap";
import './header.scss';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Image className="header-logo"
                 src="https://pbs.twimg.com/profile_images/922827797713780736/YT7KdeiL_400x400.jpg" roundedCircle/>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <h6>Hi, I wanna to become a part of HeadWorks<br/>
              See info about me below <span>&#128540;</span></h6>
          </Nav>
          <Form inline>
            <Link to="/registration">
              <Button className="header-buttons-registration" variant="outline-dark">Registration</Button>
            </Link>
            <Link to="/clients">
              <Button className="header-buttons" variant="outline-dark">Clients</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
