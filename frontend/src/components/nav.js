import React, {Component} from 'react';
import {Link, useHistory} from "react-router-dom";

const Nav = () => {
    return(
        <nav className="navbar navbar-expand navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={'/'}>Home</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={'/login'} className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/register'} className="nav-link">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/profile'} className="nav-link">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/quote'} className="nav-link">Quote</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/history'} className="nav-link">History</Link>
                        </li>
                    </ul>
                </div>        
            </div>
        </nav>
    )
}

export default Nav