
import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "./jobs-slice"; 
import visualizationSlice from "./visualization-slice";

//I separated the state into visualization (the piece of state that influences what is displayed and in what order )
//and jobs (to manage the job data that comes from the API)



const store = configureStore({
    reducer: {
       jobs: jobsSlice,
       visualization: visualizationSlice
    }
    });



export default store;