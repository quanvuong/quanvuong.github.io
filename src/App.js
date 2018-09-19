import React, { Component } from 'react';
import './App.css';

import Photo from './photo.js';
import BasicInfo from './BasicInfo.js';
import Summary from './Summary.js';
import Paper from './Paper.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Photo/>
          <BasicInfo/>
        </div>
        <div className="Body">
          <Summary/>
          <Paper/>
        </div>
      </div>
    );
  }
}

export default App;
