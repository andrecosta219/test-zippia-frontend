import React, { useCallback } from "react";
import "./Jobsection.css"

import { useEffect } from "react";

import Jobcard from "./job-section/Jobcard";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { jobsActions } from "../../../store/jobs-slice";

//This is the component where most of the logic is run

const Jobsection = (props) => {

    //Here I grab data from the store, initialize useDispatch() into a constant
    //and delcare the constant d, which holds the date at the time the app is rendered

    const dispatch = useDispatch()

    const d = new Date();

    const sevenDays = useSelector((state) => state.visualization.lastSevenDays);
    const alphabetical = useSelector((state) => state.visualization.alphabeticalCompanies);

    const initArray = useSelector((state) => state.jobs.jobsArray);


    //useCallback is used so this does not run every time the page renders

    const fetchJobsHandler = useCallback(async () => {

        //Here we request and receive the jobs from the backend
        fetch('test-zippia-backend.vercel.app/test/jobs')
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Failed to fetch status');
                }
                return res.json();
            })
            .then(resData => {
                let newArray = resData
                
                

                dispatch(jobsActions.populateArray(newArray))
                

            })
            .catch(err => {
                console.log(err);
            });

            

    }, []);

    
    //this is when the function is called when the app is rendered

    useEffect(() => {
        fetchJobsHandler();
        
    }, [fetchJobsHandler])


    useEffect(() => {

        //Here I check if alphabetical is true and if it is, this logic rearranges the posts 
        //in alphabetical order according to the company

        if (alphabetical) {
            let arrayForSorting = [...initArray]
            let newArray = arrayForSorting.sort((a, b) => {
                let fa = a.companyName.toLowerCase(),
                    fb = b.companyName.toLowerCase();

                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });


            
            dispatch(jobsActions.populateArray(newArray));

            //If alphabetical is not true, then the posts are ordered by posting date


        } else if (!alphabetical) {
            let arrayForSorting = [...initArray]
            let newArray = arrayForSorting.sort((a, b) => {
                let fa = new Date(a.postingDate),
                    fb = new Date(b.postingDate);
                if (fa < fb) {
                    return 1
                }
                if (fa > fb) {
                    return -1
                }

                return 0
            })



            dispatch(jobsActions.populateArray(newArray));

        }
    }, [alphabetical])





//The rendering of the posts is made by mapping the array where the posts are held.
//Their display is also conditioned by the hide parameter in each post (this is set in the backend)
//and the sevenDays constant that is true if we only wish to display the posts from the last seven days
    return (
        <div className="mt-4">


            {initArray.map((job) => {

                return !(job.hide && sevenDays) && <Jobcard key={job.id} title={job.jobTitle} company={job.companyName} desc={job.jobdesc} />

            })}


        </div>
    )
}

export default Jobsection;