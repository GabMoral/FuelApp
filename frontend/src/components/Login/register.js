import React, {Component} from 'react';
import { useEffect, useState } from "react";
import Loading from "../loading.js";
import ErrorMessage from "../errorMessage.js";
import axios from 'axios';
import {Link, useHistory} from "react-router-dom";
import { Alert } from "react-bootstrap";

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [success, setSuccess] = useState(null);
    const history = useHistory();

    //useEffect(() => {
    //    const userInfo = localStorage.getItem("userInfo");

    //    if(userInfo) {
    //        history.push("/profile");
    //    }
    //}, [history]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            setError(false);
        } else {
            setMessage(null)
            setError(false);
            
            try {
                const config = {
                    headers: {
                        "Content-type":"application/json",
                    },
                };
    
                setLoading(true);
    
                const { data } = await axios.post(
                    'http://localhost:5000/api/users/register', 
                    {
                        username,
                        password,
                    },
                    config
                );
                
                console.log(data);
                //localStorage.setItem("userInfo", JSON.stringify(data));
                setLoading(false);
            } catch (error) {
                setError(error.response.data.message);
                setLoading(false);
            }
        }
        
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <div className="form-group">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {loading && <Loading />}
                {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <br></br>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <br></br>
            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm Password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <br></br>
            <button className="btn btn-primary btn-block">Sign Up</button>
            <span className="form-input-login"> Already have an account? Login <a href='/login'>here</a></span>
        </form>
    )
};

export default Register;
/*
export default class Register extends Component {
    handleSubmit = e => {
        
        e.preventDefault();
        const data = {
            username: this.username,
            password: this.password,
            password_confirm: this.confirmPassword
            
        };
        
        console.log(data);
        
        axios.post('http://localhost:5000/api/users/register', data).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Username" 
                        onChange={e => this.username = e.target.value}/>
                </div>
                <br></br>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" 
                        onChange={e => this.password = e.target.value}/>
                </div>
                <br></br>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" 
                        onChange={e => this.confirmPassword = e.target.value}/>
                </div>
                <br></br>
                <button className="btn btn-primary btn-block">Sign Up</button>
                <span className="form-input-login"> Already have an account? Login <a href='/login'>here</a></span>
            </form>
        )
    }
}
*/