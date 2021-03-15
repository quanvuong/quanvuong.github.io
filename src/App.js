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

    const fun_stuff = [
      {
        img_src: "https://img.cryptokitties.co/0x06012c8cf97bead5deae237070f9587f8e7a266d/250.png",
        img_cre: "https://www.cryptokitties.co/kitty/250"
      },
      {
        img_src: funnyPhoto,
        img_cre: "http://www.jimbenton.com/"
      },
      {
        img_src: "http://www.jimbenton.com/page5/page27/files/Jim%20Benton%202-2-13.jpg",
        img_cre: "http://www.jimbenton.com/"
      }
    ]

    const len = fun_stuff.length;

    let fun = fun_stuff[Math.floor(Math.random() * len)];

    return (
      <div className="App">
        <div className="Header">
          <Photo />
          <BasicInfo />
          <div className="Photo">
            <img src={fun.img_src} width='250' alt='' />
            <div><a href={fun.img_cre}>imgcred</a></div>
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
