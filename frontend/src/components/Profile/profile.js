import React, {Component} from 'react';
import ReactDOM from "react-dom";

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
                    <select onChange={e => this.state = e.target.value}>
                        <option value="Alabama">AL</option>
                        <option value="Alaska">AK</option>
                        <option value="Arizona">AZ</option>
                        <option value="Arkansas">AR</option>
                        <option value="California">CA</option>
                        <option value="Colorado">CO</option>
                        <option value="Conneticut">CT</option>
                        <option value="Delaware">DE</option>
                        <option value="Florida">FL</option>
                        <option value="Georgia">GA</option>
                        <option value="Hawaii">HI</option>
                        <option value="Idaho">ID</option>
                        <option value="Illinois">IL</option>
                        <option value="Indiana">IN</option>
                        <option value="Iowa">IA</option>
                        <option value="Kansas">KS</option>
                        <option value="Kentucky">KY</option>
                        <option value="Louisiana">LA</option>
                        <option value="Maine">ME</option>
                        <option value="Maryland">MD</option>
                        <option value="Massachusetts">MA</option>
                        <option value="Michigan">MI</option>
                        <option value="Minnesota">MN</option>
                        <option value="Mississippi">MS</option>
                        <option value="Missouri">MO</option>
                        <option value="Montana">MT</option>
                        <option value="Nebraska">NE</option>
                        <option value="Nevada">NV</option>
                        <option value="New Hampshire">NH</option>
                        <option value="New Jersey">NJ</option>
                        <option value="New Mexico">NM</option>
                        <option value="New York">NY</option>
                        <option value="North Carolina">NC</option>
                        <option value="North Dakota">ND</option>
                        <option value="Ohio">OH</option>
                        <option value="Oklahoma">OK</option>
                        <option value="Oregon">OR</option>
                        <option value="Pennsylvania">PA</option>
                        <option value="Rhode Island">RI</option>
                        <option value="South Carolina">SC</option>
                        <option value="South Dakota">SD</option>
                        <option value="Tennesee">TN</option>
                        <option value="Texas">TX</option>
                        <option value="Utah">UT</option>
                        <option value="Vermont">VT</option>
                        <option value="Virginia">VA</option>
                        <option value="Washington">WA</option>
                        <option value="West Virginia">WV</option>
                        <option value="Wisconsin">WI</option>
                        <option value="Wyoming">WY</option>
                    </select>
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