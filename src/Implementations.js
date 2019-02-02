import React, { Component } from 'react';
import "./Implementations.css";

class Implementations extends Component {
  render() {

    return (
      <div className="Implementations">
        <div className="ImplementaionsHeader">Material related to other people's papers</div>

        <ol>

          <li>
            <div className="OnePaper">
              <div>Deep Reinforcement Learning in a Handful of Trials using Probabilistic Dynamics Models</div>
              <div>Chua et al.</div>
              <div> <a href="https://github.com/quanvuong/handful-of-trials-pytorch">Code</a> </div>
            </div>
          </li>

          <li>
            <div className="OnePaper">
              <div>Algorithmic Framework for Model-based Deep Reinforcement Learning with Theoretical Guarantees</div>
              <div>Luo et al.</div>
              <div>To understand this paper, I provided detailed proofs of its theoretical results. <a href="https://drive.google.com/file/d/1KftRUTW2jP8XIB3cwSBgh7xvveDjKDcn/view?usp=sharing">Proofs</a> </div>
            </div>
          </li>

        </ol>

      </div>
    );
  }
}

export default Implementations;
