import React from "react";
import Jobbuttons from "./job-elements/Jobbuttons";
import Jobsection from "./job-elements/Jobsection";

//This is the component that holds the area with the buttons and the area where the
//posts are being displayed

const Joblist = () => {
    return (
        <section>
             <Jobbuttons />
             <Jobsection />
        </section>
       
        
    )
}

export default Joblist;