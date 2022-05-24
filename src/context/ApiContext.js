import socketio from "socket.io-client";
import {createContext,useState} from "react";
import useAuth from "../hook/useAuth";

export const ApiContext = createContext();

export function ApiProvider({children}){
    const [code,setCode]= useState()
    const access_token = useAuth(code)
    const socket = socketio.connect(process.env.REACT_APP_SOCKET_URL);
    
    return (
        <ApiContext.Provider value={{access_token,setCode,socket}}>
            {children}
        </ApiContext.Provider>
    )
}