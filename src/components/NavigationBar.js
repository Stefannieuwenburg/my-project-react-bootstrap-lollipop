import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    Button,FormControl,
} from "react-bootstrap";
import { Link,Outlet } from "react-router-dom";
import React from "react";
import styled from "styled-components"

import lolpop from "../assets/lolpop.png";


const Styles = styled.div`
    .navbar {
        background-color: #d92c8e;
        font-weight: 10px;
    }
    .navbar-brand,
    .navbar-nav .nav-link {
        color: #fff;
        font-size: 20px;
        &:hover {
            color: black;
        }
    }
`;


const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand as={Link} to="/">
                <img
                    src={lolpop}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="logo"
                />
                LOLYPOP CANDYLAND
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about">
                        About
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact">
                        Contact
                    </Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            Shop Action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                            Something Extra
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        
            <Outlet>
            
            </Outlet>
        
    </Styles>
);


export default NavigationBar;
