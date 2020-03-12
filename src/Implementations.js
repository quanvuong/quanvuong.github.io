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
              <div> <a href="https://github.com/quanvuong/On_doing_research">Musings on research</a> </div>
            </div>
          </li>

          <li>
            <div className="OnePaper">
              <div><a href="https://github.com/quanvuong/Advanced-Basic-Theoretical-Reinforcement-Learning-Result">Advanced Basic Theoretical Reinforcement Learning Result</a> </div>
            </div>
          </li>

          <li>
            <div className="OnePaper">
              <div>Reviewer services: ICML (2020), ICRA (2020), IEEE-RAM (2019) </div>
            </div>
          </li>

          {/* <li>
            <div className="OnePaper">
              <div>I often found myself forgetting knowledge. I thus created self-test. I do them at fixed interval to keep basic results in my brain.</div>
              <div><a href="https://drive.google.com/open?id=1xg4gVeZNUsOijDgens9VWjOwMAVCPlNP">Self-tests </a> (Always In Progress)</div>
            </div>
          </li>*/}

        </ol>

      </div>
    );
  }
}

export default Implementations;
