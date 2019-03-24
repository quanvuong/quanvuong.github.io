import React, { Component } from 'react';
import "./Implementations.css";

class Implementations extends Component {
  render() {

    return (
      <div className="Implementations">
        <div className="ImplementaionsHeader">Miscellaneous</div>

        <ol>

        <li>
          <div className="OnePaper">
            <div> <a href="https://github.com/quanvuong/paper_summaries">Paper Summaries</a> </div>
          </div>
        </li>

          <li>
            <div className="OnePaper">
              <div> <a href="https://github.com/quanvuong/open_sourced_implementations">Open-sourced Implementations</a> </div>
            </div>
          </li>

          <li>
            <div className="OnePaper">
              <div>Proofs for "Algorithmic Framework for Model-based Deep Reinforcement Learning with Theoretical Guarantees" by Luo et al.</div>
              <div>To understand this paper, I provided detailed proofs of its theoretical results. <a href="https://drive.google.com/file/d/1KftRUTW2jP8XIB3cwSBgh7xvveDjKDcn/view?usp=sharing">Proofs</a> </div>
            </div>
          </li>

          <li>
          <div className="OnePaper">
            <div>I often found myself forgetting knowledge. I thus created self-test. I do them at fixed interval to keep basic results in my brain.</div>
            <div><a href="https://drive.google.com/open?id=1xg4gVeZNUsOijDgens9VWjOwMAVCPlNP">Self-tests </a> (Work In Progress)</div>
          </div>
        </li>

        </ol>

      </div>
    );
  }
}

export default Implementations;
