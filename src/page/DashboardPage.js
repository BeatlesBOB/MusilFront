import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";

export default function DashboardPage(){
    const location = useLocation();
    const access_token = useAuth(location.state.code)
    // const [search,setSearch] = useState('')
    // const [searchResults,setSearchResults] = useState([])

    // useEffect(()=>{
    //     if(!access_token){return}

    // },[access_token])

    // const _handleSearch = (txt) => {
    //     if(!access_token || txt.length ===0 ){ 
    //         setSearchResults([])
    //         return
    //     }
    // }
    
    return (
        <Container className="d-flex flex-column py-2" style={{height:"100vh"}}>
            {/* <Form.Control type="search" placeholder="caca" value={search} onChange={e=> _handleSearch(e.target.value)} /> */}
            {/* <div className="flex-grow-1 my-2" style={{overflowY:"auto"}}>
                
            </div> */}
        </Container>
    )
}