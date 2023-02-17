import { createSlice } from "@reduxjs/toolkit";

//This slice has only one piece of data, the array that holds the jobs that come from the api

const initialState = {
    jobsArray: []
  }


const jobsSlice = createSlice({
    name: 'jobs',
    initialState: initialState,
    reducers: {
       populateArray(state,action){
          state.jobsArray = action.payload;        
       },
       sortArray(state, action){
        state.jobsArray = action.payload;
  
       }


      
  }});

  export const jobsActions = jobsSlice.actions;
  export default jobsSlice.reducer;