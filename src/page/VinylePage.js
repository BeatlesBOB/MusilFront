import axios from 'axios';
import React, { useState, useEffect,useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import WebPlayback from "../component/WebPlayback"
import VinyleItem from "../component/VinyleItem"
import {SocketContext} from '../context/socket';
import { useLocation } from "react-router-dom";

export default function VinylePage(props) {
    const location = useLocation();
    const socket = useContext(SocketContext);
    const [album,setAlbum] = useState();
    const [nb_vinyle,setNB_vinyle] = useState(8)
    const [currentTrack,setCurrentTrack] = useState()
    
    useEffect(() => {
        socket.on("QRCODE",(data)=>{
            setAlbum(data)
        }); 
    },[socket]);

   const  _handleTrack = (track) => {
        setCurrentTrack(track)
   }
   return (
       <Container fluid>
           <Row>
                {
                    Array.from({nb_vinyle}).map((x,i) => (
                        <VinyleItem isSelected={i===album.position?true:false} access_token={location.state.access_token} currentTrack={currentTrack}/>
                    ))
                }
           </Row>
           <WebPlayback album_ID={album.album_ID} access_token={location.state.access_token} setCurrentTrack={setCurrentTrack} />
       </Container>
    );
}

