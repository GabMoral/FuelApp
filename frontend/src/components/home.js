import React, {Component, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import {Link, useHistory} from "react-router-dom";

const Home = () => {
    const history = useHistory();
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo")
        if(userInfo) {
            history.push("/profile");
        }
    }, [history]);

        return (
            <form>
                <h2> Home page</h2>
                <div className='buttonContainer'>
                    <a href='/login'>
                        <Button>Login</Button>
                    </a>
                    <a href='/register'>
                        <Button>Register</Button>
                    </a>
                </div>
            </form>
        )
}

export default Home;