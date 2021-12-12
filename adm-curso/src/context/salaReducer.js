
import { types } from "../types/types";

export const salaReducer = (state, action) =>{
    
    switch(action.type){
        case types.actualizarSala:
            return{
                ...state,
                sala: action.payload
            }
        case types.terminarSala:
            return{
                ...state,
                sala: action.payload,
                preguntas:[]
            }
        case types.iniciarPreguntas:
            return{
                ...state,
                preguntas:[...action.payload]
            }
        case types.actualizarPreguntas:
            return{
                ...state,
                preguntas:[action.payload,...state.preguntas]
            }
        default:
            return state;
    }
}