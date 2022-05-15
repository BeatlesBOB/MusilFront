import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function DashboardPage(){
    const location = useLocation();
    console.log(location.state.code)
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
          
        </Container>
    )
}