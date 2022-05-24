import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import WebPlayback from "../component/WebPlayback"
import VinyleItem from "../component/VinyleItem"

export default function VinylePage(props) {
    const socket = useContext(SocketContext);
    const [album,setAlbum] = useState();
    const access_token = useAuth(location?.state?.code)
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
       <Container fluid ref={vinyle_container}>
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

