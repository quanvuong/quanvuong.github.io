import React, { Component } from 'react';
import "./Papers.css";

class Papers extends Component {
  render() {
    let entropy = ["Efficient Entropy For Policy Gradient with Multi-Dimensional Action Space.", "https://arxiv.org/abs/1806.00589", "A short version appeared in ICLR 2018 Workshop"]

    let img_complexity = ["Measuring the complexity of two-dimensional binary patterns — Sub-symmetries versus Papentin complexity.", "https://ieeexplore.ieee.org/document/7153235/", "IAPR International Conference on Machine Vision Applications 2015"]

    let spu = ["Supervised Policy Update for Deep Reinforcement Learning.", "https://arxiv.org/abs/1805.11706"]

    return (
      <div className="Papers">
        <div className="PaperHeader">Papers</div>

        <div>
          <div className="YearHeader">2019</div>
          <ol>
            <li>
              <div className="OnePaper">
                <div><strong>Better Exploration with Optimistic Actor Critic</strong></div>
                <div>Neural Information Processing Systems <strong>(neurIPS)</strong> 2019. </div>
                <div style={{ color: 'red' }}>Spotlight Presentation (2.4% acceptance rate)</div>
                <div> Ciosek, <strong>Vuong</strong>, Loftin, Hofmann </div>
              </div>
            </li>

            <li>
              <div className="OnePaper">
                <div><strong>How to pick the domain randomization parameters for sim-to-real transfer of reinforcement learning policies?</strong></div>
                <div>IEEE International Conference on Robotics and Automation <strong>(ICRA)</strong> 2019 Learning Legged Locomotion Workshop. <a href="https://arxiv.org/abs/1903.11774">PDF</a> <a href="https://github.com/quanvuong/domain_randomization">Code</a> </div>
                <div> <strong>Vuong</strong>, Vikram, Su, Gao, Christensen </div>
              </div>
            </li>

            <li>
              <div className="OnePaper">
                <div><strong>Pre-training as Batch Meta Reinforcement Learning with tiMe</strong></div>
                <div>Preprint. <a href="https://arxiv.org/abs/1909.11373">PDF</a> </div>
                <div> <strong>Vuong</strong>, Liu, Liu, Ciosek, Su, Christensen </div>
              </div>
            </li>

          </ol>



          <div className="YearHeader">2018</div>

          <ol>
            <li>
              <div className="OnePaper">
                <div><strong>{spu[0]}</strong></div>
                <div>International Conference on Learning Representations <strong>(ICLR)</strong> 2019. <a href={spu[1]}>PDF</a> <a href="https://drive.google.com/file/d/1Yg8x4bSzoj1t6Sk-_N3jTx2eTaVZGoqW/view?usp=sharing">Slide</a> <a href="https://drive.google.com/open?id=1lJeP_3YNlUoMaU-RDENDrkfjPdZQYpA3">Poster</a> <a href="https://github.com/quanvuong/Supervised_Policy_Update">Code</a>
                </div>
                <div> <strong>Vuong</strong>, Zhang, Ross </div>
              </div>
            </li>

            <li>
              <div className="OnePaper">
                <div><strong>{entropy[0]}</strong></div>
                <div>International Conference on Learning Representations <strong>(ICLR)</strong> 2018 Workshop. <a href="https://arxiv.org/abs/1806.00589">Full PDF</a> <a href="https://openreview.net/pdf?id=rJc8sN1vG">Short PDF</a></div>
                <div>Zhang, <strong>Vuong</strong>, Song, Gong, Ross</div>
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
                <div>{img_complexity[2]}. <a href={img_complexity[1]}>PDF</a> </div>
                <div>Toussaint, Onea, <strong>Vuong</strong> </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Papers;
