import React, { Component } from 'react';
import './App.css';

import Photo from './photo.js';
import BasicInfo from './BasicInfo.js';
import Summary from './Summary.js';
import Papers from './Papers.js';
import Implementaions from './Implementations.js';
import Media from './Media.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Photo />
          <BasicInfo />
        </div>
        <div className="Body">
          <Summary />
          <Papers />
          <Media />
          <Implementaions />
        </div>
      </div>
    );
  }
}

export default App;
