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

    const _handletest = (t) =>{
        console.log(t)
    }

   return (
       <Container fluid>
           <Row className='g-0'>
                {
                    Array.from(Array(nb_vinyle).keys()).map((x,i) => (
                        <VinyleItem isSelected={i===album?.position?true:false} access_token={access_token} currentTrack={currentTrack} key={i}/>
                    ))
                }
           </Row>
           {
               album ? <WebPlayback album_uri={album?.album_uri} access_token={access_token} setCurrentTrack={setCurrentTrack} t={_handletest} />:null
           }
           
       </Container>
    );
}

