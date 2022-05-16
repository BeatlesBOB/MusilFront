import React from "react";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const code = new URLSearchParams(window.location.search).get("code")
const AUTH_URL = `${process.env.REACT_APP_AUTH_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=`

export default function LoginPage(){

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
            <a href={AUTH_URL} className="btn btn-success">Se connecter</a>
            {
                code ? <Navigate to="/dashboard" replace={true} state={{code}}/>: null
            }
        </Container>
    )
}