import React, {Component} from 'react';
//import Validate from 'C:/Users/Gabriel/Desktop/App/frontend/src/components/validate';
import axios from 'axios';

export default class Register extends Component {
    handleSubmit = e => {
        
        e.preventDefault();
        const data = {
            username: this.username,
            password: this.password,
            password_confirm: this.confirmPassword
            
        };
        
        console.log(data);
        
        axios.post('http://localhost:5000/api/users', data).then(
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

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" 
                        onChange={e => this.password = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm Password" 
                        onChange={e => this.confirmPassword = e.target.value}/>
                </div>
                <button className="btn btn-primary btn-block">Sign Up</button>
                <span className="form-input-login"> Already have an account? Login <a href='/login'>here</a></span>
            </form>
        )
    }
}