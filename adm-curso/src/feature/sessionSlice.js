import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

//Not in use yet
export const sessionSlicer = createSlice({
    name: "SessionInfo",
    initialState:{
        session:null,
        curso: null
    },
    //state.session.user
    //store.getState . curso
    reducers:{
        startSession: (state,action) =>{
            state.session = action.payload;
            console.log('from redus', state.session);
        },
        setCourse: (state,action)=>{
            state.curso = action.payload;
            console.log('from redux course',state.session.course)
        },
    },
});

export const {startSession,setCourse} = sessionSlicer.actions;



export default sessionSlicer.reducer; 

