import React from 'react';
import CommonCardComponent from './CommonCardComponent';

class QuickPayBills extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            heading: "Quick Pay Bills",
            savedBillersHeading: "Your Saved Billers",
            buttonText: "Pay Bill",
            userName: "Meralco",
            customerNo: "Customer No : 1093830982",
            savedBillers: [
                "M", "G", "BP", "BP", "V", "S"
            ]
        }
    }

    count = 0;

    render() {
        return(
            <CommonCardComponent state={this.state} />
        )
    }
}

export default QuickPayBills;