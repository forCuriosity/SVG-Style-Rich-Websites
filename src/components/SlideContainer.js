import React, {Component} from 'react'

import ClassicalMusic from './ClassicalMusic/ClassicalMusic';
import TilesSharp from './TilesSharp/TilesSharp';


let w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

var viewBox = {x:x, y:y};

class SlideContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: 'Music Producer'
    };
  }

render(){
  return(
  <div>
    <ClassicalMusic viewBox={viewBox} title={this.state.title}/>
    <TilesSharp />
  </div>
  );
}
}

export default SlideContainer
