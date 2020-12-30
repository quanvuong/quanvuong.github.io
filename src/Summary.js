import React, { Component } from 'react';
import './Summary.css';

// and <a href="https://scungao.github.io">Prof. Sean Gao</a>.

class Summary extends Component {
  render() {
    return (
      <div className="Summary">

        <div className="SummaryOneP">Hello! I am Quan Vuong.</div>

        <div className="SummaryOneP">I am a PhD student at the
        University of California San Diego.
        </div>

        <div className="SummaryOneP">
          During my PhD, I did research internships at Microsoft Research (2019),
          Google Research (2020).
        </div>

        <div className="SummaryOneP">
          I am fortunate to have incredible
          and supportive research mentors over the course of my continuing education.
          My PhD advisors are <a href="http://www.hichristensen.net">Prof. Henrik I. Christensen</a> and <a href="http://cseweb.ucsd.edu/~haosu/"> Prof. Hao Su</a>.
          During undergrad, I worked with <a href="http://www.nyu.edu/projects/keithwross/">Prof. Keith Ross</a> on reinforcement learning, <a href="https://en.wikipedia.org/wiki/Godfried_Toussaint">Prof. Godfried Toussaint</a> on computational geometry, <a href="https://lassb.abudhabi.nyu.edu/index.php">Prof. Kourosh Salehi-Ashtiani</a> on synthetic biology and <a href="https://www.genealogy.math.ndsu.nodak.edu/id.php?id=41474">Prof. Faisal Saied</a> on spectral clustering. </div> <div className="SummaryOneP"> During undergrad, my team also developed a smart driving assistant under the guidance of <a href="http://www.ex-ch.com/">Matt</a>. We won the UAE's national <a href="https://nyuad.nyu.edu/en/news/latest-news/honors-and-awards/2016/february/roadwatch-app-wins-uae-best-m-government-service-award.html">innovation competition</a> for university students and were awarded a cash prize worth 250000 USD. I trained as a debater under <a href="https://its.law.nyu.edu/facultyprofiles/index.cfm?fuseaction=profile.overview&personid=42911">Prof. John Coughlin</a>. I also had the pleasure to serve as the Vice President of the Student Government. </div> </div >);
  }
}

export default Summary;
