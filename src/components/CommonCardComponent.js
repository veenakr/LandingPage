import React from 'react';
import { MainCard, QuickPayBillsStyles } from './CommonCardComponentStyles';

class CommonCardComponent extends React.Component {

    count = 0;

    render() {
        return(
            <QuickPayBillsStyles>
                <MainCard>
                    <h1 className="Quick-Pay-Bills">{this.props.state.heading}</h1>
                    <div>
                        <p className="Your-Saved-Billers">{this.props.state.savedBillersHeading}</p>
                            <div>
                                {this.props.state.savedBillers.map((data) => {
                                    this.count++;
                                    if(this.count < 5){
                                        return <span className="oval" key={this.count}>{data}</span>
                                    }
                                }
                                )}
                                <span className="three-dots">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </span>
                                <span className="See-More">See More</span>
                            </div>
                    </div>
                    <div class="user-info">
                        <div>
                            <h2 className="User-Name">{this.props.state.userName}</h2>
                            <p className="Cust-No">{this.props.state.customerNo}</p>
                        </div>
                        <button className="Pay-Bill" block>{this.props.state.buttonText}</button>
                    </div>
                    
                </MainCard>
            </QuickPayBillsStyles>
            
        )
    }
}

export default CommonCardComponent;