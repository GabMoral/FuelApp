import React, {Component, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";

const Nav = () => {

    const history = useHistory();
    return(
        <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>Home</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/profile'} className="nav-link">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/quote'} className="nav-link">Quote</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/history'} className="nav-link">History</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link" onClick={() => {
                            localStorage.removeItem("userInfo");
                        }}>Logout</Link>
                        </li>
                    </ul>
                </div>        
            </div>
        </nav>
    )
}

export default Nav