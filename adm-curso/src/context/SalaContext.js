import React, { createContext,useReducer } from 'react';
import { salaReducer } from './salaReducer';


export const SalaContext = createContext();

const initialState= {
    sala:{
        title:'',
        salaToken:'',
        inicio:null,
        fin:null
    },
    preguntas:[]
}
export const SalaProvider = ({ children }) => {
    
    const [salaState, dispatch] = useReducer(salaReducer , initialState)
    
    

    return (
        <SalaContext.Provider value={{ salaState,dispatch }}>
            { children }
        </SalaContext.Provider>
    )
}

