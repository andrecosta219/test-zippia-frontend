import React from "react";
import "./Jobcard.css";

const Jobcard = (props) => {

    //The data from the posts is passed into this component via props
    //and it handles the display of the information.

    return (
        <div className="card mb-3 p-4">
            <div className="row">
                <div className="col-4 p-3">
                    <h3 className="me-2">{props.title}</h3>
                    <h5 className="me-2">{props.company}</h5>
                </div>
                <div className="col-6 description ms-2 p-3">
                    <div dangerouslySetInnerHTML={{__html: props.desc}} />
                </div>
                <div className="col-1 d-flex align-items-end justify-content-center">
                    <button className="btn btn-primary button-card">View</button>
                </div>

            </div>


        </div>
    )
}

export default Jobcard;
