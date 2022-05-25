import React, { useState, useEffect,useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import WebPlayback from "../component/WebPlayback"
import VinyleItem from "../component/VinyleItem"
import {ApiContext} from '../context/ApiContext';
import { Socket } from 'socket.io-client';

export default function VinylePage(props) {
    const {access_token} = useContext(ApiContext)
    const {socket} = useContext(ApiContext);
    const [album,setAlbum] = useState();
    const [nb_vinyle,setNB_vinyle] = useState(8)
    const [currentTrack,setCurrentTrack] = useState()
    
    useEffect(() => {
        socket.on("QRCODE",(data)=>{
            setAlbum(data)
        }); 
        return () =>{
            socket.off("QRCODE")
        }
    },[socket]);


   return (
       <Container fluid>
           <Row>
                {
                    Array.from({nb_vinyle}).map((x,i) => (
                        <VinyleItem isSelected={i===album.position?true:false} access_token={access_token} currentTrack={currentTrack}/>
                    ))
                }
           </Row>
           <WebPlayback album_ID={album.album_ID} access_token={access_token} setCurrentTrack={setCurrentTrack} />
       </Container>
    );
}

