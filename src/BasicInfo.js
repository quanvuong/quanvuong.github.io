import React, { Component } from 'react';
import './BasicInfo.css';

class BasicInfo extends Component {
  render() {
    return (
      <div className="BasicInfo">
        <div>Quan Vuong</div><br/>
        <div><a href="mailto:quan.hovuong@gmail.com">quan.hovuong@gmail.com</a></div><br/>
        <div>PhD Student, UC San Diego <a href="http://ai.ucsd.edu/">Artificial Intelligence Group</a></div><br/>
        <div>Fields: Deep Reinforcement Learning, Robotics</div><br/>
        <div><a href="https://drive.google.com/file/d/1DpEitRs4Vk8bhtCneUNOYMxa2f2Bai-m/view?usp=sharing">Curriculum Vitae</a></div><br/>
      </div>
    );
  }
}

export default BasicInfo;
