import React, { Component } from 'react';
import "./Papers.css";

class Papers extends Component {
  render() {
    let entropy = ["Efficient Entropy For Policy Gradient with Multi-Dimensional Action Space.", "https://arxiv.org/abs/1806.00589", "A short version appeared in ICLR 2018 Workshop", "Yiming Zhang, Quan Vuong, Kenny Song, Xiao-Yue Gong, Keith W. Ross"]

    let img_complexity = ["Measuring the complexity of two-dimensional binary patterns — Sub-symmetries versus Papentin complexity.", "https://ieeexplore.ieee.org/document/7153235/", "IAPR International Conference on Machine Vision Applications 2015", "Godfried Toussaint, Noris Onea, Quan Vuong"]

    let spu = ["Supervised Policy Update", "https://arxiv.org/abs/1805.11706", "Quan Vuong, Yiming Zhang, Keith W. Ross"]

    return (
      <div className="Papers">
        <div className="PaperHeader">Papers</div>

        <div>
          <div className="YearHeader">2018</div>
          <ol>
          <li>
            <div className="OnePaper">
              <div><a href={spu[1]}>{spu[0]}</a></div>
              <div>NeurIPS 2018 Deep Reinforcement Learning workshop</div>
              <div>{spu[2]}</div>
              <div><a href="https://drive.google.com/file/d/1Yg8x4bSzoj1t6Sk-_N3jTx2eTaVZGoqW/view?usp=sharing">Slide</a></div>
            </div>
          </li>

          <li>
            <div className="OnePaper">
              <div><a href={entropy[1]}>{entropy[0]}</a></div>
              <div><a href="https://openreview.net/pdf?id=rJc8sN1vG">{entropy[2]}</a></div>
              <div>{entropy[3]}</div>
            </div>
          </li>
          </ol>
        </div>

        <div>
          <div className="YearHeader">2015</div>
          <ol>
            <li>
              <div className="OnePaper">
                <div><a href={img_complexity[1]}>{img_complexity[0]}</a></div>
                <div>{img_complexity[2]}</div>
                <div>{img_complexity[3]}</div>
              </div>
            </li>
          </ol>
      </div>
      </div>
    );
  }
}

export default Papers;
