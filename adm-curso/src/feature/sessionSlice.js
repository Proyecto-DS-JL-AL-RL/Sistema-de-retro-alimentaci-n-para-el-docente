import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

//Not in use yet
export const sessionSlicer = createSlice({
    name: "SessionInfo",
    initialState:{
        session:null,
        headerContent: null,
        idCourse : null,
        interSession:null
    },
    //state.session.user
    //store.getState . curso
    reducers:{
        startSession: (state,action) =>{
            state.session = action.payload;
            state.idCourse = action.payload.idCourse;
            //console.log('from redus', state.session);
        },
        setHeaderContent: (state,action)=>{
            state.headerContent = action.payload;
            //console.log('from redux course',state.session.course)
        },
        setInterSession: (state,action)=>{
            state.interSession = action.payload;
        },
        setIdCourse : (state,action) =>{
            state.idCourse = action.payload;
        }
    },
});

export const {startSession,setHeaderContent,setInterSession,setIdCourse} = sessionSlicer.actions;



export default sessionSlicer.reducer; 

