import React, { Component } from 'react';
import './App.css';
import SideMenu from './components/SideMenu';
import MyWidgets from './components/MyWidgets';


class App extends Component {
  render() {
    return (
    
      <div className="app-wrapper">
        <div className="side-menu-wrapper">
          <SideMenu />
        </div>
        
        <div className="my-widgets-wrapper">
          <MyWidgets />
        </div>
      </div>
    );
  }
}

export default App;
