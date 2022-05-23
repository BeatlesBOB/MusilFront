import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

export default function VinyleItem(props) {
   return (
       <Col xs={3} className="d-flex flex-direction-column" style={{height:"50vh"}}>
           <div style={{height:"50%",width:"100%"}}></div>
           <div style={{height:"50%",width:"100%"}}>
                {
                    props.isSelect?<p>Now playing {track.name}</p>:null
                }
           </div>
       </Col>
    );
}
