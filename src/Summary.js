import React, { Component } from 'react';
import './Summary.css';

// and <a href="https://scungao.github.io">Prof. Sean Gao</a>.

class Summary extends Component {
  render() {
    return (
      <div className="Summary">
        <div className="SummaryOneP">Hello! I am Quan Vuong.</div>

        <div className="SummaryOneP">I am a PhD student at the University of California San Diego. I am fortunate to have as my advisor <a href="http://www.hichristensen.net">Prof. Henrik I. Christensen</a>. I also work closely with <a href="http://cseweb.ucsd.edu/~haosu/">Prof. Hao Su</a>.  </div>

        <div className="SummaryOneP">During my PhD, I did research internships at Microsoft Research (2019), Google Research (2020).</div>

        <div className="SummaryOneP">During undergrad, I worked with <a href="http://www.nyu.edu/projects/keithwross/">Prof. Keith Ross</a> on Reinforcement Learning and <a href="https://en.wikipedia.org/wiki/Godfried_Toussaint">Prof. Godfried Toussaint</a> on Computational Geometry. My team won the UAE's national <a href="https://nyuad.nyu.edu/en/news/latest-news/honors-and-awards/2016/february/roadwatch-app-wins-uae-best-m-government-service-award.html">innovation competition</a> for university students, worth 250000 USD. I trained as a debater under <a href="https://its.law.nyu.edu/facultyprofiles/index.cfm?fuseaction=profile.overview&personid=42911">Prof. John Coughlin</a>. I also served as the Student Body Vice President.</div>
      </div>
    );
  }
}

export default Summary;
