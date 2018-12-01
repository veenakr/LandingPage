import React, { Component } from 'react';
import './App.css';
import SideMenu from './components/SideMenu';
import MyWidgets from './components/MyWidgets';
import { AppWrapper } from './components/MainLandingPageStyles';


class App extends Component {
  render() {
    return (
    
      <AppWrapper>
        <div className="side-menu-wrapper">
          <SideMenu />
        </div>
        
        <div className="my-widgets-wrapper">
          <MyWidgets />
        </div>
      </AppWrapper>
    );
  }
}

export default App;
