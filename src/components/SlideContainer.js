import React, {Component} from 'react'

import ClassicalMusic from './ClassicalMusic/ClassicalMusic';
import TilesSharp from './Background/TilesSharp/TilesSharp';
import Arrows from './Objects/Arrows/MobileArrows'


let w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

var viewBox = {
  x:x,
  y:y
};

// Trying to manipulate setState with objects
// If you want to keep other properties in the object, a method like underscore's extend is useful: this.setState({abc: _.extend(this.state.abc, {xyz: 'new value'})});

class SlideContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      viewBox: viewBox,
      title: 'Music Producer',
      tracks: [{title:'track1', sub:'F Minor for Comercial'}, {title:'track2', sub:'G Major for Holiday'}]
    };
  }

render(){
  return(
  <div>
    <Arrows viewBox={viewBox} />
    <ClassicalMusic viewBox={viewBox} text={this.state.text} tracks={this.state.tracks}/>
    <TilesSharp viewBox={viewBox}/>
  </div>
  );
}
}

export default SlideContainer
