import React, { Component } from 'react';
import './Summary.css';

class Summary extends Component {
  render() {
    return (
      <div className="Summary">
        <div className="SummaryOneP">Hello! I am Quan Vuong.</div>

        <div className="SummaryOneP">I am a PhD student in the <a href="http://ai.ucsd.edu/">Artificial Intelligence</a> group at the University of California San Diego. I'm advised by <a href="http://www.hichristensen.net">Prof. Henrik I. Christensen</a>.</div>

        <div className="SummaryOneP">I went to undergrad at <a href="https://en.wikipedia.org/wiki/New_York_University_Abu_Dhabi">New York University Abu Dhabi</a>. During undergrad, I worked with <a href="http://www.nyu.edu/projects/keithwross/">Prof. Keith Ross</a> on Reinforcement Learning and <a href="http://cgm.cs.mcgill.ca/~godfried/">Prof. Godfried Toussaint</a> on Computational Geometry. My team won the UAE's national <a href="https://nyuad.nyu.edu/en/news/latest-news/honors-and-awards/2016/february/roadwatch-app-wins-uae-best-m-government-service-award.html">innovation competition</a> for university students, worth 250000 USD. I trained as a debater under <a href="https://its.law.nyu.edu/facultyprofiles/index.cfm?fuseaction=profile.overview&personid=42911">Prof. John Coughlin</a> and was a semi-finalist at the Oxford Inter-varsity Debate Championship ESL track. I also served as the Student Body Vice President.</div>
      </div>
    );
  }
}

export default Summary;
