import { createStore } from '@reduxjs/toolkit';
import sessionReducer from './feature/sessionSlice';
//Not in use yet
export default createStore(sessionReducer);