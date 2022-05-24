import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios';

export default function VinyleItem(props) {
    useEffect(()=>{
        // let config = { 
        //     headers:{
        //         "Accept":"application/json",
        //         "Content-Type":"application/json",
        //         "Authorization": `Bearer ${props.access_token}`
        //     },
        // }
        // axios.get(`https://api.spotify.com/v1/me/player/currently-playing`,config)
        // .then((res)=>{
        //     console.log(res.data.item.name)
        //     //setTrack(res.data.item)
        // })
    })
   return (
       <Col xs={3} className="d-flex flex-direction-column" style={{height:"50vh"}}>
           <div style={{height:"50%",width:"100%"}}></div>
           <div style={{height:"50%",width:"100%"}}>
                {
                    props.isSelect?<p>Now playing {props.currentTrack.name}</p>:null
                }
           </div>
       </Col>
    );
}
