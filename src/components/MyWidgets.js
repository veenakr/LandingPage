import React, { Component } from 'react';
import QuickPayBills from './QuickPayBills';
import SendMoneyInstant from './SendMoneyInstant';
import { MainLandingPageCards } from './MainLandingPageStyles';


class App extends Component {
  render() {
    return (
        <MainLandingPageCards className="card-components">
            <QuickPayBills />
            <SendMoneyInstant />
        </MainLandingPageCards>
    );
  }
}

export default App;
