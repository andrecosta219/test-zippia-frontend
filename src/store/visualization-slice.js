import { createSlice } from "@reduxjs/toolkit";

//this slice only has two booleans that establish if the posts have to be in alphabetical order
//and if only the posts from the last seven days should be displayed. The option for both to 
//be available is made possible as well.

const initialState = {

    alphabeticalCompanies: false,
    lastSevenDays: false
    
  }


const visualizationSlice = createSlice({
    name: 'visualization',
    initialState: initialState,
    reducers: {
       updateAlphabeticalCompanies(state,action){
        state.alphabeticalCompanies = !state.alphabeticalCompanies;
       },
       updateLastSevenDays(state,action){
        state.lastSevenDays = !state.lastSevenDays;
       }


      
  }});

  export const visualizationActions = visualizationSlice.actions;
  export default visualizationSlice.reducer;