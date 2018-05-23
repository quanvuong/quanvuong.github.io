import React, { Component } from 'react';
import quanPhoto from './Quan.jpg';
import './Photo.css';

class Photo extends Component {
  render() {
    return (
      <div className="Photo">
        <img src={quanPhoto} width='200'/>
      </div>
    );
  }
}

export default Photo;
