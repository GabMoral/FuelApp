import React, {Component} from 'react';
import ReactDOM from "react-dom";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAdd1 = this.onChangeAdd1.bind(this);
        this.onChangeAdd2 = this.onChangeAdd2.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeZip = this.onChangeZip.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            fullname: '',
            address1: '',
            address2: '',
            city: '',
            state: [],
            zipcode: '',
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test name'],
            fullname: 'test name'
        })
    }

    onChangeName(e) {
        this.setState({
            fullname: e.target.value
        });
    }

    onChangeAdd1(e) {
        this.setState({
            address1: e.target.value
        });
    }

    onChangeAdd2(e) {
        this.setState({
            address2: e.target.value
        });
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }

    onChangeState(e) {
        this.setState({
            state: e.target.value
        });
    }

    onChangeZip(e) {
        this.setState({
            zipcode: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const profile = {
            fullname: this.state.fullname,
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode            
        }

        console.log(profile);

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Profile</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Full name</label>
                        <input type="text" maxlength="50" className="form-control" placeholder="Full name" 
                            value = {this.state.fullname}
                            onChange={this.onChangeName}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Address 1</label>
                        <input type="text" maxlength="100" className="form-control" placeholder="Address 1" 
                            value = {this.state.address1}
                            onChange={this.onChangeAdd1}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Address 2</label>
                        <input type="text" maxlength="100" className="form-control" placeholder="Address 2" 
                            value = {this.state.address2}
                            onChange={this.onChangeAdd2}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" maxlength="100" className="form-control" placeholder="City" 
                            value = {this.state.city}
                            onChange={this.onChangeCity}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>State</label>
                        <select classname = "form-control" 
                            value={this.state.state}
                            onChange={this.onChangeState}>
                            {
                                this.state.state.map(function(state) {
                                    return <option
                                    key={state}
                                    value={state}>{state}
                                    </option>
                                })
                            }                   
                        </select>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Zipcode</label>
                        <input type="text" minlength="5" maxlength="9" className="form-control" placeholder="Zipcode" 
                            value = {this.state.zipcode}
                            onChange={this.onChangeZip}/>
                    </div>
                    <br></br>
                    <button className="btn btn-primary btn-block">Save</button>
                </form>
            </div>
        )
    }
}