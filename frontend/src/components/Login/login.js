import React, {Component} from 'react';
import axios from 'axios';

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

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" 
                        onChange={e => this.password = e.target.value}/>
                </div>

                <button className="btn btn-primary btn-block">Login</button>
                <span className="form-input-login"> Don't have an account? Sign Up <a href='/register'>here</a></span>
            </form>
        )
    }
}