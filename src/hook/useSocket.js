import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function useSocket(url){
    const [socket,setSocket] = useState()
    useEffect(()=>{
      setSocket(io(url))
    },[url])
    return io
}