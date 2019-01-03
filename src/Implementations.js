import React, { Component } from 'react';
import "./Implementations.css";

class Implementations extends Component {
  render() {

    return (
      <div className="Implementations">
        <div className="ImplementaionsHeader">Implementation of other people's papers</div>

        <ol>

          <li>
            <div className="OnePaper">
              <div>Deep Reinforcement Learning in a Handful of Trials using Probabilistic Dynamics Models</div>
              <div>Chua et al.</div>
              <div> <a href="https://github.com/quanvuong/handful-of-trials-pytorch">Code</a> </div>
            </div>
          </li>
        </ol>

      </div>
    );
  }
}

export default Implementations;
