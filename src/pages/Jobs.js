import React from "react";

import Joblist from "../components/jobs/Joblist";


//This app only has one page, the one that displays the first 10 jobs.

const Jobs = () => {



    return (
        <div className="container-fluid mt-4">
            
            <Joblist />

        </div>
    )
}

export default Jobs;