import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
// import SVG from 'svg.js'

import Brand from './Brand'
import Piano from './Piano'

import './ClassicalMusic.css'


class Album extends Component {

svg(){
  // let viewBox = this.props.viewBox;

  // document.addEventListener('DOMContentLoaded', function() {
  //   if (SVG.supported) {
  //     requestAnimationFrame(function() {
  //
  //       var paper = SVG('ClassicalMusic').size(viewBox.x, viewBox.y)
  //
  //       // paper.circle(45).move(21,21).attr({ fill:'rgba(38,17,177, 1)'});
  //
  //     }); } else { alert('SVG not supported');} }, false);
}

render(){
  // this.svg()
  let topPadding = 18;
  let height = this.props.viewBox.y - (topPadding * 2);
  let sidePadding = 11;
  let width = this.props.viewBox.x - (sidePadding * 2) - 14;

  let padding = `${topPadding}px ${sidePadding}px`

    return(
      <Container fluid className="wrapper" style={{ width: this.props.viewBox.x, height: this.props.viewBox.y, padding: padding}}>
        <Container className="ClassicalMusic" id="ClassicalMusic" style={{width: width, height: height}}>
            <Brand viewBox={this.props.viewBox} title={this.props.title} />
            <Piano viewBox={this.props.viewBox} />
        </Container>
      </Container>
    );
  }
}

export default Album


// <Header as='h2'>Julian, Producer</Header>
// <Image src={titleSign} />
