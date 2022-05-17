import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useAuth(code){
    const [access_token,setAccess_token] = useState();
    const [refresh_token,setRefresh_token] = useState();
    const [expires_in,setExpires_in] = useState();
    let navigate = useNavigate();

    useEffect(()=>{
        console.log(code)
        axios.post("http://localhost:5000/auth/login",{code:code}).then(res =>{
            console.log("oui")
            // setAccess_token(res.data.access_token)
            // setExpires_in(res.data.expires_in)
            // setRefresh_token(res.data.refresh_token)
        }).catch((err) =>{
            console.log(err)
            // navigate("/", { replace: true });
        })
    },[])


    // useEffect(()=>{
    //     if(!refresh_token || !expires_in){return}
    //     const interval = setInterval(()=>{
    //         axios.post("http://localhost:5000/refresh",{refresh_token}).then(res =>{
    //             setAccess_token(res.data.access_token)
    //             setExpires_in(res.data.expires_in)
    //         }).catch(() =>{
    //             navigate("/", { replace: true });
    //         })
    //     },(expires_in - 60)*1000)
        
    //     return ()=>{
    //         clearInterval(interval);
    //     }
    // },[refresh_token])
  
    return access_token
}