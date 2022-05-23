import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';

export default function WebPlayback(props) {
    const [album_ID, setAlbum_ID] = useState(props.album_ID);

    useEffect(async () => {
        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: 'Musilapp',
                getOAuthToken: cb => { cb(props.access_token); },
                volume: 0.5
            });    
            player.addListener('ready', ({ device_id }) => {
                let data = {"context_uri": `spotify:album:${props.album_ID}`,"position_ms": 0}
                let config = { 
                    method:"PUT",
                    headers:{
                        "Accept":"application/json",
                        "Content-Type":"application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body:JSON.stringify(data)
                }
                axios.put(`https://api.spotify.com/v1/me/player/play?${device_id}`,data,config)
            });
            player.connect();
        };
    },[album_ID]);
   return;
}
