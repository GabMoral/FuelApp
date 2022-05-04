import { useEffect, useState } from "react";
import React, {Component} from 'react';
import axios from 'axios';
import Loading from "../loading.js";
import ErrorMessage from "../errorMessage.js";

const Login = ({history}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    //useEffect(() => {
    //    const userInfo = localStorage.getItem("userInfo");

    //    if(userInfo) {
    //        history.push("/profile");
    //    }
    //}, [history]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    "Content-type":"application/json"
                },
            };

            setLoading(true);

            const { data } = await axios.post(
                'http://localhost:5000/api/users/login', 
                {
                    username,
                    password,
                },
                config
            );
            
            console.log(data);
            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
        } catch (error) {
            setError(error.response.data.message);
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}
        >
            <h3>Login</h3>

            <div className="form-group">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {loading && <Loading />}
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
            <button className="btn btn-primary btn-block">Login</button>
            <span className="form-input-login"> Don't have an account? Sign Up <a href='/register'>here</a></span>
        </form>
    )
};

export default Login;
/*
export default class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: this.username,
            password: this.password
        };
        console.log(data);
       
        axios.post('http://localhost:5000/api/users/login', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>

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
                <button className="btn btn-primary btn-block">Login</button>
                <span className="form-input-login"> Don't have an account? Sign Up <a href='/register'>here</a></span>
            </form>
        )
    }
}
*/