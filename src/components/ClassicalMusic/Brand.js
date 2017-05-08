import React, {Component} from 'react'

import './Brand.css'

class Brand extends Component {

  render(){
    let {x} = this.props.viewBox;

    let ratioWidthToBoard = 565/1600;
    let width = x * ratioWidthToBoard *.66;
    let ratioHeightToSelf = 273/565;
    let height = width * ratioHeightToSelf;


    let paddingLeft = x * (111/1600);

    let styleBrand = {
      left: paddingLeft,
      position: 'absolute',
      top: this.props.padding.height
    }

    

    return(
      <svg id="Brand" xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 564.5 273.1" style={{...styleBrand}}>
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


// GOAL: Text to scale to path container


// APPROACH #0
// Find ratio of text box to viewport
// multple by # of letters
// x2 (bc spaces)
// = fontSize: ratio vh

// APPROACH #1
//  (tutorial) = Font Sizze to Box: http://codepen.io/omerillo/pen/bpGqOQ


// APPROACH #2
// 1. measure box width (http://stackoverflow.com/questions/118241/calculate-text-width-with-javascript#118251)
// 2. Divide # of letters to a ratio yieding alloted space for each Text
// 3. Convert alloted space to pixel
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
