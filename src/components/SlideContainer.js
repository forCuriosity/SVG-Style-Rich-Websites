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

// BEST PRACTICES: SVG System https://css-tricks.com/creating-svg-icon-system-react/
// BEST PRACTICES: CSS https://medium.com/@jviereck/modularise-css-the-react-way-1e817b317b04

// Trying to manipulate setState with objects
// If you want to keep other properties in the object, a method like underscore's extend is useful: this.setState({abc: _.extend(this.state.abc, {xyz: 'new value'})});

class SlideContainer extends Component {
  constructor(props){
    super(props)

    this.state = {
      viewBox: viewBox,
      title: 'Music Producer',
      name: 'Julian Stacey',
      role: 'Producer',
      contact: 'contact email@gmail.com call (773) 432 9522',
      operatingAt: 'Constellation Studios',
      tracks: [{title:'Comercial Track 1', sub:'F Minor for Comercial'}, {title:'Comercial Track 2', sub:'G Major for Holiday'}]
    };
  }

render(){
  let s = this.state;

  return(
  <div>
    <ClassicalMusic viewBox={viewBox} title={this.state.title} tracks={this.state.tracks} name={s.name} role={s.role} contact={s.contact} operatingAt={s.operatingAt}/>
    <Arrows viewBox={viewBox} />
    <TilesSharp viewBox={viewBox}/>
  </div>
  );
}
}

export default SlideContainer
