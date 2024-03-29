import axios from 'axios';
import React,{createRef, useEffect, useState } from 'react';

export default function WebPlayback(props) {
    
    const Web_player = createRef();

    useEffect( () => {
        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;
        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {
            const player = new window.Spotify.Player({
                name: 'Musilapp',
                getOAuthToken: cb => { cb(props.access_token); },
                volume: 0.2
            }); 
            Web_player.current = player
            
            player.addListener('ready', async ({ device_id }) => {
                let data = JSON.stringify({"context_uri": `${props.album_uri}`,"position_ms": 0})
                let config = { 
                    headers:{
                        "Accept":"application/json",
                        "Content-Type":"application/json",
                        "Authorization": `Bearer ${props.access_token}`
                    },
                }
                await axios.put(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,data,config)
            });

            player.addListener('player_state_changed', ({position,duration,track_window: { current_track }}) => {
                props.setCurrentTrack(current_track)
            });
           
            player.connect();
        };

        return () => {
            console.log(Web_player)
        }

    },[]);  
      
    
}
