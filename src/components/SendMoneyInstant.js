import React from 'react';
import CommonCardComponent from './CommonCardComponent';

class QuickPayBills extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            heading: "Send Money Instantly",
            savedBillersHeading: "Your Recent Transactions",
            buttonText: "Send Money",
            userName: "Joe Torress",
            customerNo: "Account No : 1093 8309 8202",
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