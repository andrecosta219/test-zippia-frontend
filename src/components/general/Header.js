import React from "react";
import "./Header.css";
import logo from "./../../assets/images/zippia-logo.png";
import { Search } from "react-bootstrap-icons";

//This header has no functionality, it is only present in the project so that it looks more
//like the real website and to show some bootstrap functionalities


const Header = () => {
    return (
        <div className="header-styles">
            <div className="container-fluid">
                <nav className="row navbar navbar-default navbar-expand-lg py-3 bordered no-gutters">
                    <div className="col-12 col-lg-2 d-flex">
                        <img src={logo} alt="logo" />
                        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    


                    <div className="col-8 collapse navbar-collapse" id="navbarSupportedContent">

                        
                        <ul className="navbar-nav  d-flex align-items-center ms-2">
                            <form className="my-2 d-flex py-0">
                                <input id="form-left" className="form-control" type="search" placeholder="Search for Job Titles" aria-label="Search" />
                                <input className="form-control " type="search" placeholder="Location" aria-label="Location" />
                                <button className="rounded-end my-0 p-1 ml-0 button-form orange" ><Search className="my-2 mx-2" size={25}/></button>
                            </form>
                            <li className="nav-item ms-3">
                                <a className="nav-link" href="#">JOBS</a>
                            </li>
                            <li className="nav-item dropdown ms-2">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    CAREERS
                                </a>
                                <div className="dropdown-menu dropdown-container" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">By Job Titles</a>
                                    <a className="dropdown-item" href="#">By College Majors</a>
                                    <a className="dropdown-item" href="#">By Companies</a>
                                    <a className="dropdown-item" href="#">By Location</a>
                                    <a className="dropdown-item" href="#">Job Search Advice</a>
                                    <a className="dropdown-item" href="#">Salaries</a>


                                </div>
                            </li>
                            <li className="nav-item ms-2">
                                <a className="nav-link" href="#">POST JOB</a>
                            </li>

                            <button className="btn btn-primary ms-2 px-3">SIGN IN</button>
                            

                        </ul>

                    </div>


                </nav>
            </div>
        </div>


    )
}

export default Header;