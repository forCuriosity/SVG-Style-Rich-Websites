import React from 'react'
import { Container } from 'semantic-ui-react'

const Background = (props) => {

  let p = props.padding
  let b = props.background
  let img = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23fce4b9' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    //PADDING =
    let bgStyle = {
      margin: `${p.height}px ${p.width}px`,
      left: p.width,
      width: b.width,
      height: b.height,
      position: 'absolute',
      padding: 0,
      backgroundColor: '#ff5995',
      backgroundImage: img
    }

  return(<Container id="ClassicalMusic" style={{...bgStyle}} />)
}

export default Background
