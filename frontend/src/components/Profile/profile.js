import React, {Component} from 'react';

export default class Profile extends Component {
    handleSubmit = e => {
        
        e.preventDefault();
        const data = {
            name: this.name,
            address1: this.address1,
            address2: this.address2,
            city: this.city,
            state: this.state,
            zipcode: this.zipcode
        };
        
        console.log(data);
        
    };
    render() {
        return (
            <form>
                <h3>Profile</h3>

                <div className="form-group">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="Full name" 
                        onChange={e => this.name = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Address 1</label>
                    <input type="text" className="form-control" placeholder="Address 1" 
                        onChange={e => this.address1 = e.target.value}/>
                </div>

                <div className="form-group">
                    <label>Address 2</label>
                    <input type="text" className="form-control" placeholder="Address 2" 
                        onChange={e => this.address2 = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" className="form-control" placeholder="City" 
                        onChange={e => this.city = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-control" placeholder="State" 
                        onChange={e => this.state = e.target.value}/>
                </div>
                <div className="form-group">
                    <label>Zipcode</label>
                    <input type="text" className="form-control" placeholder="Zipcode" 
                        onChange={e => this.zipcode = e.target.value}/>
                </div>
                <button className="btn btn-primary btn-block">Save</button>
            </form>
        )
    }
}