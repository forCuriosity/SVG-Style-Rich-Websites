import React, {Component} from 'react'

import './Brand.css'

class Brand extends Component {

  render(){
    let viewBox = this.props.viewBox;

    let ratioWidthToBoard = 565/1600;
    let width = viewBox.x * ratioWidthToBoard *.66;
    let ratioHeightToSelf = 273/565;
    let height = width * ratioHeightToSelf;


    let paddingLeft = viewBox.x * (111/1600);
    // let x = `${p}`


// GOAL: Text to scale to path container
//
//  (tutorial) = Font Sizze to Box: http://codepen.io/omerillo/pen/bpGqOQ
// Tools
// Width of Text ```.getComputedTextLength()```
// Select elements inside of Svg
//   ```
//     var a = document.getElementById("alphasvg");
//     a.addEventListener("load",function(){
//
//         // get the inner DOM of alpha.svg
//         var svgDoc = a.contentDocument;
//         // get the inner element by id
//         var delta = svgDoc.getElementById("delta");
//         // add behaviour
//         delta.addEventListener("mousedown",function(){
//                 alert('hello world!')
//         }, false);
//     }, false);
//   ```

    return(
      <svg id="Brand" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 564.5 273.1" style={{left: paddingLeft, position: 'absolute'}}>
        <path className="brand0" d="M0 0s54.8 136.1 89.7 164.4c0 0 235.8 100.4 317.9 108.7 0 0 109.6-82.2 156.9-273.1H0z"/>
        <path className="brand1" d="M303.8 5L85.5 71.4l33.2 86.3 206.7 86.4 132-40.7 42.3-93z"/>
        <text transform="matrix(1.107 0 0 1 177.37 105.45)">
          <tspan className="brand2" x="0" y="0" style={{fontSize:'3vw'}}>MUSIC</tspan>
          <tspan className="brand2" x="0" y="56.4" style={{fontSize:'3vw'}}>PRODUCTION</tspan>
        </text>
      </svg>
    )
  }
}

export default Brand
