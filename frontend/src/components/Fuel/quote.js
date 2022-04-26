import React, {Component} from 'react';

export default class Quote extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            username: this.username,
            password: this.password,
            deliveryAddress: "123 Main St."
        };
        console.log(data);
        const adminLogin = {username: "admin1", password: "admin123"}
        if (this.username == adminLogin.username && this.password == adminLogin.password) {
            console.log("Logged in");
        }
    };
    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <h3>Fuel Quote</h3>

                <div className="form-group">
                    <label>Gallons requested</label>
                    <input type="number" className="form-control" placeholder="Whole Gallons" 
                        onChange={e => this.gallons = e.target.value}/>
                </div>
                <br></br>

                <div className="form-group">
                    <label>Delivery Address</label>
                    <input type="text" className="form-control" value="123 Main St." readonly />
                </div>
                <br></br>
                <div className="form-group">
                    <label>Delivery Date</label>
                    <input type="date" className="form-control" placeholder="Delivery Date" 
                        onChange={e => this.deliveryDate = e.target.value}/>
                </div>
                <br></br>
                <div className="form-group">
                    <label>Suggested price/gallon</label>
                    <input type="text" className="form-control" value="$0.00" readonly />
                </div>
                <br></br>
                <button className="btn btn-primary btn-block">Submit</button>
            </form>
        )
    }
}