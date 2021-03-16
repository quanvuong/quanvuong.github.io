import React, { Component } from 'react';
import "./Award.css";
import "./Implementations.css";

class Mentees extends Component {
    render() {

        return (
            <div className="Award">
                <div className="AwardHeader">Current & Past mentees</div>

                <ol>
                    <div className="OnePaper">
                        <li>
                            <a href="https://sites.google.com/view/jiachenli/">Jiachen Li</a> (UCSD MS -> UCSB PhD)
                        </li>
                    </div>
                </ol>

            </div>
        );
    }
}

export default Mentees;
