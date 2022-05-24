import React, { useEffect,useContext } from "react";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { ApiContext } from "../context/ApiContext";

const code = new URLSearchParams(window.location.search).get("code")
const AUTH_URL = `${process.env.REACT_APP_AUTH_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=user-modify-playback-state%20user-read-playback-state%20app-remote-control%20streaming%20user-library-read%20playlist-read-private%20playlist-read-collaborative%20user-read-currently-playing`

export default function LoginPage(){
    const {setCode} = useContext(ApiContext)
    useEffect(()=>{
        setCode(code)
    })
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
            <a href={AUTH_URL} className="btn btn-success">Se connecter</a>
            {
                code ? <Navigate to="/dashboard" replace={true}/>: null
            }
        </Container>
    )
}