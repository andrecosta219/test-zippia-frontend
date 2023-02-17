import React from "react";
import "./Jobbuttons.css"
import { visualizationActions } from "../../../store/visualization-slice";

import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";

const Jobbuttons = () => {

    //This component toggles the status of alphabetical and sevenDays, which dictate the order
    //in which the posts are rendered

    const dispatch = useDispatch();

    const sevenDays = useSelector((state) => state.visualization.lastSevenDays);
    const alphabetical = useSelector((state) => state.visualization.alphabeticalCompanies);

    const handleAlphabeticalClick = () => {
        dispatch(visualizationActions.updateAlphabeticalCompanies())

        
    }

    const handleSevenDaysClick = () => {
        dispatch(visualizationActions.updateLastSevenDays())
        

        
    }

    return (
        <div className="button-panel mt-4">
            <ul className="d-flex">
                <li>
                    <button onClick={handleAlphabeticalClick} className={`btn btn-primary ${alphabetical ? "selected" : ""}`}>Order By Company (A-Z)</button>
                </li>
                <li className="ms-3">
                    <button onClick={handleSevenDaysClick} className={`btn btn-primary ${sevenDays ? "selected" : ""}`}>Show Only Jobs Posted in Last Week</button>
                </li>
            </ul>
        </div>
    )
}

export default Jobbuttons;