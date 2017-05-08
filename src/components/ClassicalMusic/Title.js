import React from 'react'

const Tracks = (props) => {

  let styleTracks = {
    position: 'absolute',
    top: '30%',
    left: '80%',
    display: 'table',
    color: 'white',
    fontSize: '3vw'
  }

  let styleFontTitle = {
    fontSize: '2.5vw',
    margin: 0
  }
  let styleFontSub = {
    fontSize: '1vw',
    color: '#FBE3B9',
    margin: 0
  }


  return(
    <div style={{...styleTracks}} className="divtext">
      <h4 style={{...styleFontTitle}}>Track #1</h4>
    </div>
  )
}

export default Tracks
