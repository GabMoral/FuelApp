import React, {Component} from 'react';

export default class History extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Delivery Address</th>
                        <th>Delivery Date</th>
                        <th>Suggested Price</th>
                        <th>Amount Paid</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>123 Main St</td>
                        <td>01/01/2022</td>
                        <td>$500</td>
                        <td>$500</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}