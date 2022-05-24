import axios from "axios";
import React, { useContext, useState } from "react";
import {Container,Form,Row} from "react-bootstrap";
import CustomNavbar from "../component/CustomNavbar";
import TrackItem from "../component/TrackItem";
import { ApiContext } from "../context/ApiContext";

export default function DashboardPage(){
    const [search,setSearch] = useState('')
    const [searchResults,setSearchResults] = useState([])
    const {access_token} = useContext(ApiContext)

    const _handleSearch = (txt) => {
        setSearch(txt)
        if(!access_token || txt.length <= 1 ){setSearchResults([])}
        else{
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