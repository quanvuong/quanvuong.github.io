import React, { Component } from 'react';
import './Summary.css';

class Summary extends Component {
  render() {
    return (
      <div className="Summary">
        <div className="SummaryOneP">Hello! I am Quan Vuong, currently a PhD student in the <a href="http://ai.ucsd.edu/">Artificial Intelligence</a> group at the University of California San Diego. My advisor is Professor <a href="http://nakashole.com/">Ndapa Nakashole</a>. We work on developing sample-efficient learning approach to Natural Language Processing tasks.</div>

        <div className="SummaryOneP">In undergrad, I worked with Professor <a href="http://www.nyu.edu/projects/keithwross/">Keith Ross</a> on Reinforcement Learning and Professor <a href="http://cgm.cs.mcgill.ca/~godfried/">Godfried Toussaint</a> on Computational Geometry. My team won the UAE's national <a href="https://nyuad.nyu.edu/en/news/latest-news/honors-and-awards/2016/february/roadwatch-app-wins-uae-best-m-government-service-award.html">innovation competition</a> for university students, worth 250000 USD. I also served as the Student Body Vice President.</div>
      </div>
    );
  }
}

export default Summary;
