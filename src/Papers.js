import React, { Component } from 'react';
import "./Papers.css";

class Papers extends Component {
  render() {
    let entropy = ["Efficient Entropy For Policy Gradient with Multi-Dimensional Action Space.", "https://arxiv.org/abs/1806.00589", "A short version appeared in ICLR 2018 Workshop", "Y. Zhang, Q. Vuong, K. Song, X.Y. Gong, K.W. Ross"]

    let img_complexity = ["Measuring the complexity of two-dimensional binary patterns — Sub-symmetries versus Papentin complexity.", "https://ieeexplore.ieee.org/document/7153235/", "IAPR International Conference on Machine Vision Applications 2015", "G. Toussaint, N. Onea, Q. Vuong"]

    let spu = ["Supervised Policy Update for Deep Reinforcement Learning.", "https://arxiv.org/abs/1805.11706", "Q. Vuong, Y. Zhang, K.W. Ross"]

    return (
      <div className="Papers">
        <div className="PaperHeader">Papers</div>

        <div>
          <div className="YearHeader">2018</div>

          <ol>
          <li>
            <div className="OnePaper">
              <div><strong>{spu[0]}</strong></div>
              <div>ICLR 2019. <a href={spu[1]}>PDF</a> <a href="https://drive.google.com/file/d/1Yg8x4bSzoj1t6Sk-_N3jTx2eTaVZGoqW/view?usp=sharing">Slide</a> <a href="https://drive.google.com/open?id=1lJeP_3YNlUoMaU-RDENDrkfjPdZQYpA3">Poster</a> <a href="https://github.com/quanvuong/Supervised_Policy_Update">Code</a>
            </div>
              <div>{spu[2]}</div>
            </div>
          </li>

          <li>
            <div className="OnePaper">
              <div><strong>{entropy[0]}</strong></div>
              <div>ICLR 2018 Workshop. <a href="https://arxiv.org/abs/1806.00589">Full PDF</a> <a href="https://openreview.net/pdf?id=rJc8sN1vG">Short PDF</a></div>
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
                <div><strong>{img_complexity[0]}</strong></div>
                <div>{img_complexity[2]} <a href={img_complexity[1]}>PDF</a> </div>
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
