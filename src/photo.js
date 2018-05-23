import React, { Component } from 'react';
import quanPhoto from './Quan.jpg';

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
