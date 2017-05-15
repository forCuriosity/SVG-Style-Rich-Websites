import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
// import SVG from 'svg.js'

import Brand from './Brand'
import Piano from './Piano'
import Portrait from './Portrait'
import Tracks from './Tracks'
import Title from './Title'
import Background from './Background'

import './ClassicalMusic.css'


class Album extends Component {
  render(){
  // PADDING
  let padding = {
    height: 18,
    width: 11
  }

  let background = {
    height: this.props.viewBox.y - (padding.height * 2),
    width: this.props.viewBox.x - (padding.width * 2) - 14
  }

  // let height = this.props.viewBox.y - (padding.height * 2);
  // let width = this.props.viewBox.x - (padding.width * 2) - 14;

let p = this.props;
    return(
      <Container fluid className="wrapper" style={{ width: this.props.viewBox.x, height: this.props.viewBox.y, position: 'relative'}}>
        <Background background={background} padding={padding} />
        <Brand viewBox={this.props.viewBox} title={this.props.title} padding={padding} />
        <Piano viewBox={this.props.viewBox} />
        <Portrait viewBox={this.props.viewBox} padding={padding} />
        <Tracks viewBox={this.props.viewBox} tracks={p.tracks} padding={padding}/>
        <Title name={p.name} role={p.role} contact={p.contact} operatingAt={p.operatingAt} padding={padding}/>
      </Container>
    );
  }
}

export default Album


// <Header as='h2'>Julian, Producer</Header>
// <Image src={titleSign} />
