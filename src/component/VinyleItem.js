import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import axios from 'axios';

export default function VinyleItem(props) {
   return (
       <Col xs={3} className="d-flex flex-column" style={{height:"50vh"}}>
           <div style={{height:"80%",width:"100%",backgroundColor:props.isSelected?"white":"transparent"}}></div>
           <div style={{height:"20%",width:"100%"}} className="d-flex justify-content-center mt-2">
                {
                    props.isSelected?<p className='fs-6 track text-muted'>Now playing {props?.currentTrack?.name}</p>:null
                }
           </div>
       </Col>
    );
}
