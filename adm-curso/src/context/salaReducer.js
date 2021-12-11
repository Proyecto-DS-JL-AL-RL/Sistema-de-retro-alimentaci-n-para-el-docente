
import { types } from "../types/types";

export const salaReducer = (state, action) =>{
    
    switch(action.type){
        case types.actualizarSala:
            return{
                ...state,
                sala: action.payload
            }
        default:
            return state;
    }
}