import React, { useState } from "react";
import { Container,Navbar,Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

export default function CustomNavbar(){


    return (
        <Navbar bg="success" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to={{pathname:'/dashboard'}}>
                        <Nav.Link>Dashboard</Nav.Link>
                    </Link>
                    <Link to={{pathname:"/Setup"}}>
                        <Nav.Link>Setup</Nav.Link>
                    </Link> 
                </Nav>
            </Container>
        </Navbar>
    )
}