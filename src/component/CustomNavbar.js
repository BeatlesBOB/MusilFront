import React from "react";
import { Container,Navbar,Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

export default function CustomNavbar(){

    return (
        <Navbar bg="success" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/setup">Setup</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}