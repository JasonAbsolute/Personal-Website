import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import '../CSS/NavBar.css'
import styled from 'styled-components';
import PDF from '../resume.pdf'
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    font-size: .9em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar {
    font-size: 1.5em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
    <Styles>
        <Navbar>
            <Navbar className="m-auto" href="https://jason-urban.com/" >Jason Urban</Navbar>
        </Navbar>
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Item><Nav.Link href={PDF}>Click Here For Resume</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)