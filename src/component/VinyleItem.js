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
       <Col xs={3} className="d-flex flex-column" style={{height:"50vh"}}>
           <div style={{height:"80%",width:"100%"}}></div>
           <div style={{height:"20%",width:"100%"}} className="d-flex justify-content-center mt-2">
                {
                    props.isSelect?<p>Now playing {props.currentTrack.name}</p>:null
                }
           </div>
       </Col>
    );
}
