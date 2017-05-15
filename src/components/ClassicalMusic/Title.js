import React from 'react'

import './Title.css'

const Tracks = (props) => {

  let p = props;

  return (
    <div className="titleContainer">
      <h3>{p.name}, <span>{p.role}</span></h3>
      <h6>{p.contact}</h6>
      <h5>Operating at <span>{p.operatingAt}</span></h5>
    </div>
  )
}

export default Tracks

// Best Practices for Responsive Text: http://webdesignerwall.com/tutorials/5-useful-css-tricks-for-responsive-design

// import React, { Component } from 'react'
// import { Button, Dimmer, Header, Image } from 'semantic-ui-react'
//
// export default class DimmerExampleEvents extends Component {
//   state = {}
//
//   handleShow = () => this.setState({ active: true })
//   handleHide = () => this.setState({ active: false })
//
//   render() {
//     const { active } = this.state
//     const content = (
//       <div>
//         <Header as='h2' inverted>Title</Header>
//
//         <Button primary>Add</Button>
//         <Button>View</Button>
//       </div>
//     )
//
//     return (
//       <Dimmer.Dimmable
//         as={Image}
//         dimmed={active}
//         dimmer={{ active, content }}
//         onMouseEnter={this.handleShow}
//         onMouseLeave={this.handleHide}
//         size='medium'
//         src='/assets/images/wireframe/image.png'
//       />
//     )
//   }
// }
