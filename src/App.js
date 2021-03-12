import React, { Component } from 'react';
import './App.css';

import Photo from './photo.js';
import BasicInfo from './BasicInfo.js';
import Summary from './Summary.js';
import Papers from './Papers.js';
import Implementaions from './Implementations.js';
import Media from './Media.js';
import Award from './Award.js';
import funnyPhoto from './6d94c45d2cafa385a8be5f3ea8.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header">
          <Photo />
          <BasicInfo />
          <div className="Photo">
            <img src={funnyPhoto} width='250' alt='' />
          </div>
        </div>
        <div className="Body">
          <Summary />
          <Papers />
          <Award />
          <Media />
          <Implementaions />
        </div>
      </div>
    );
  }
}

export default App;
