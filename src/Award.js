import React, { Component } from 'react';
import "./Award.css";
import "./Implementations.css";

class Award extends Component {
  render() {

    return (
      <div className="Award">
        <div className="AwardHeader">Awards</div>

        <ol>
          <div className="OnePaper">
            <li>Microsoft Azure credits research grant (20,000 USD, awarded Feb 2020) </li>
          </div>
        </ol>

      </div>
    );
  }
}

export default Award;
