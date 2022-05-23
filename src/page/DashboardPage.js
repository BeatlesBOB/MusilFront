import axios from "axios";
import React, { useEffect, useState } from "react";
import {Container,Form,Row} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";
import CustomNavbar from "../component/CustomNavbar";
import TrackItem from "../component/TrackItem";

export default function DashboardPage(){
    const location = useLocation();
    const [search,setSearch] = useState('')
    const [searchResults,setSearchResults] = useState([])
    const access_token = useAuth(location?.state?.code)
    useEffect(()=>{
        if(!access_token){return}
    },[access_token])

    const _handleSearch = (txt) => {
        console.log(txt)
        setSearch(txt)
        if(!access_token || search.length <= 1 ){setSearchResults([])}
        else{
            setSearch(txt);
            let config = {
                headers:{
                    "Accept":"application/json",
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${access_token}`
                }
            }
            axios.get(`https://api.spotify.com/v1/search?q=${txt}&type=album`,config)
            .then((res)=>{
                setSearchResults(res.data.albums.items)
            })
        }
    }
    
    return (
        <>
            <CustomNavbar/>
            <Container style={{height:"100vh"}} className="my-2">
                <Form.Control type="search" placeholder="Recherche.." value={search} onChange={(e)=>{_handleSearch(e.target.value)}}></Form.Control>
                <Row className="flex-grow-1 my-2" style={{overflowY:"auto",height:"80vh"}}>
                    {
                        searchResults.map(album=>(
                            <TrackItem album={album} key={album.id}/>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}