import React, { Component } from 'react';
import './App.css';

import Photo from './photo.js';
import BasicInfo from './BasicInfo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Photo/>
        <BasicInfo/>
      </div>
    );
  }
}

export default App;
