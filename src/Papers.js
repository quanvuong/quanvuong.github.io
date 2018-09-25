import React, { Component } from 'react';

class Papers extends Component {
  render() {
    let entropy = ["Efficient Entropy For Policy Gradient with Multi-Dimensional Action Space.", "https://arxiv.org/abs/1806.00589", "A short version appears in ICLR 2018 Workshop", "Yiming Zhang, Quan Vuong, Kenny Song, Xiao-Yue Gong, Keith W. Ross"]

    let img_complexity = ["Measuring the complexity of two-dimensional binary patterns — Sub-symmetries versus Papentin complexity.", "https://ieeexplore.ieee.org/document/7153235/", "IAPR International Conference on Machine Vision Applications 2015", "Godfried Toussaint, Noris Onea, Quan Vuong"]

    let spu = ["Supervised Policy Update", "https://arxiv.org/abs/1805.11706", "", "Quan Vuong, Yiming Zhang, Keith W. Ross"]

    let papers = [spu]

    return (
      <div className="Papers">
        <div>Papers</div>

        <ul>
          {papers.map(p => {
            return <li className="OnePaper">
              <a href={p[1]}>{p[0]}</a>
              <div>{p[2]}</div>
              <div>{p[3]}</div>
            </li>
          })}

          <li className="OnePaper">
            <div><a href={entropy[1]}>{entropy[0]}</a></div>
            <div><a href="https://openreview.net/pdf?id=rJc8sN1vG">{entropy[2]}</a></div>
            <div>{entropy[3]}</div>
          </li>

          <li className="OnePaper">
            <div><a href={img_complexity[1]}>{img_complexity[0]}</a></div>
            <div>{entropy[2]}</div>
            <div>{entropy[3]}</div>
          </li>

        </ul>
      </div>
    );
  }
}

export default Papers;
