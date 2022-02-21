import React, {Component} from 'react';

export default class Profile extends Component {
    render() {
        return (
            <form>
                <h3>Profile</h3>

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