import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './feature/sessionSlice';
//Not in use yet
export default configureStore({
    reducer:{
        session: sessionReducer,
    },
});