import React, { Component } from 'react';
import "./Media.css";
import "./Implementations.css";

class Media extends Component {
  render() {

    return (
      <div className="Media">
        <div className="MediaHeader">Media</div>

        <ol>
          <div className="OnePaper">
            <li>Optimistic Actor Critic is featured on Microsoft Research blog. <a href="https://www.microsoft.com/en-us/research/blog/optimistic-actor-critic-avoids-the-pitfalls-of-greedy-exploration-in-reinforcement-learning/"> Link</a> </li>
          </div>
        </ol>

      </div>
    );
  }
}

export default Media;
