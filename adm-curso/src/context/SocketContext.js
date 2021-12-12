import React, { createContext } from 'react';
import { useSocket } from '../hook/useSocket';


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online } = useSocket('/');

    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}

