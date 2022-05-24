import React, { useState } from "react";
import { Container,Navbar,Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

export default function CustomNavbar(){


    return (
        <Navbar bg="success" variant="dark">
            <Container>
                <Navbar.Brand>Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to={"/dashboard"} style={{color:"white",textDecoration:"none",padding:"0.5rem 1rem"}}>
                        Dashboard
                    </Link>
                    <Link to={"/setup"} style={{color:"white",textDecoration:"none",padding:"0.5rem 1rem"}}>
                        Setup
                    </Link>

                    
                    {/* <Nav.Link href="/setup">Setup</Nav.Link>
                    <Nav.Link href="/vinyle">Vinyle</Nav.Link> */}
                </Nav>
            </Container>
        </Navbar>
    )
}