import {createSlice} from "@reduxjs/toolkit";

//Not in use yet
export const sessionSlicer = createSlice({
    name: "SessionInfo",
    initialState:{
        session:null
    },

    reducers:{
        getSession: (state,action) =>{
            state.session = action.payload;
        },
        getSession: (state)=>{
            state.session = null;
        },
    },
});

export const {startSession,endSession,modSession} = sessionSlicer.actions;

export const getSession = (state) => state.session.session;

export default sessionSlicer.reducer; 

