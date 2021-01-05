import React, { Component } from 'react';
import "./Papers.css";

class Papers extends Component {
  render() {
    let entropy = ["Efficient Entropy For Policy Gradient with Multi-Dimensional Action Space", "https://arxiv.org/abs/1806.00589", "A short version appeared in ICLR 2018 Workshop"]

    let img_complexity = ["Measuring the complexity of two-dimensional binary patterns — Sub-symmetries versus Papentin complexity", "https://ieeexplore.ieee.org/document/7153235/", "IAPR International Conference on Machine Vision Applications 2015"]

    let spu = ["Supervised Policy Update for Deep Reinforcement Learning", "https://arxiv.org/abs/1805.11706"]

    return (
      <div className="Papers">
        <div className="PaperHeader">Papers</div>

        <div>

          <ol>

            <li>
              <div className="OnePaper">
                <div>First Order Optimization in Policy Space for Constrained Deep Reinforcement Learning</div>
                <div>neurIPS 2020 <a href="https://arxiv.org/abs/2002.06506">PDF</a> </div>
                <div style={{ color: 'red' }}>Spotlight (2.9% acceptance rate)</div>
                <div> Zhang, <strong>Vuong</strong>, Ross </div>
              </div>
            </li>

            <li>
              <div className="OnePaper">
                <div>Multi-task Batch Reinforcement Learning with Metric Learning</div>
                <div>neurIPS 2020 <a href="https://sites.google.com/eng.ucsd.edu/multi-task-batch-reinforcement/home">website</a> </div>
                <div>Li*, <strong>Vuong*</strong>, Liu, Liu, Ciosek, Christensen, Su </div>
                <div>*: Li is my master student advisee and co-first author</div>
              </div>
            </li>

            <li>
              <div className="OnePaper">
                <div>Striving for Simplicity and Performance in Off-Policy DRL: Output Normalization and Non-Uniform Sampling</div>
                <div>ICML 2020 <a href="https://arxiv.org/abs/1910.02208">PDF</a> <a href="https://github.com/AutumnWu/Streamlined-Off-Policy-Learning">Code</a> </div>
                <div> Wang, Wu, <strong>Vuong</strong>, Ross </div>
              </div>
            </li>

            <li>
              <div className="OnePaper">
                <div>Better Exploration with Optimistic Actor Critic</div>
                <div>neurIPS 2019 <a href="https://arxiv.org/abs/1910.12807">PDF</a> <a href="https://drive.google.com/open?id=1jx9oQQnRrerUoxy8WxH2fm1WNdZD3L9D">Slide</a> <a href="https://drive.google.com/open?id=1C-76VJ3vnf7O1y1ANgrHLZq__1tzvxWW">Poster</a> <a href="https://github.com/microsoft/oac-explore">Code</a> </div>
                <div style={{ color: 'red' }}>Spotlight (2.4% acceptance rate)</div>
                <div> Ciosek, <strong>Vuong</strong>, Loftin, Hofmann </div>
              </div>
            </li>

            <li>
              <div className="OnePaper">
                <div>{spu[0]}</div>
                <div>ICLR 2019 <a href={spu[1]}>PDF</a> <a href="https://drive.google.com/file/d/1Yg8x4bSzoj1t6Sk-_N3jTx2eTaVZGoqW/view?usp=sharing">Slide</a> <a href="https://drive.google.com/open?id=1lJeP_3YNlUoMaU-RDENDrkfjPdZQYpA3">Poster</a> <a href="https://github.com/quanvuong/Supervised_Policy_Update">Code</a>
                </div>
                <div> <strong>Vuong</strong>, Zhang, Ross </div>
              </div>
            </li>

            <li>
              <div className="OnePaper">
                <div>{img_complexity[0]}</div>
                <div>{img_complexity[2]}. <a href={img_complexity[1]}>PDF</a> </div>
                <div>Toussaint, Onea, <strong>Vuong</strong> </div>
              </div>
            </li>

          </ol>
        </div>

        <div className="PaperHeader">Workshops & Reports</div>

        <div>
          <ol>
            <li>
              <div className="OnePaper">
                <div>Machine Learning for Robotic Manipulation</div>
                <div>Review paper written for UCSD PhD Research Exam. <a href="https://arxiv.org/abs/2101.00755">PDF</a> </div>
                <div>Recommended by Research Exam committee as a good sample report for future PhD students to refer to.</div>
                <div> <strong>Vuong</strong> </div>
              </div>
            </li>

            <li>
              <div className="OnePaper">
                <div>How to pick the domain randomization parameters for sim-to-real transfer of reinforcement learning policies?</div>
                <div>ICRA 2019 Learning Legged Locomotion Workshop. <a href="https://arxiv.org/abs/1903.11774">PDF</a> <a href="https://github.com/quanvuong/domain_randomization">Code</a> </div>
                <div> <strong>Vuong</strong>, Vikram, Su, Gao, Christensen </div>
              </div>
            </li>

            <li>
              <div className="OnePaper">
                <div>{entropy[0]}</div>
                <div>ICLR 2018 Workshop. <a href="https://arxiv.org/abs/1806.00589">Full PDF</a> <a href="https://openreview.net/pdf?id=rJc8sN1vG">Short PDF</a></div>
                <div>Zhang, <strong>Vuong</strong>, Song, Gong, Ross</div>
              </div>
            </li>

          </ol>
        </div>


      </div>
    );
  }
}

export default Papers;

// {<div className="PaperHeader">Preprints</div> }

{/* <div>
</div> */}
