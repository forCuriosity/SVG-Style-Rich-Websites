import React from 'react'
import './Tracks.css';
import { Button } from 'semantic-ui-react'

const Tracks = (props) => {

  // let {x, y} = this.props.viewBox
  //
  // // Width of Text
  //
  // var els = document.getElementsByClassName("divtext"),
  // refWidth = els[0].clientWidth,
  // refFontSize = parseFloat(window.getComputedStyle(els[0],null).getPropertyValue("font-size")),
  // i = 1;
  // while(!!els[i]){
  //   els[i].style.fontSize = refFontSize * refWidth / els[i].clientWidth + "px";
  //   i++;
  // }
  // Height of Text

  // let width = 200
  //
  // // Margin of Text
  // let marginLeft = -1 * (width/2)
  // let marginTop = -1 * (height/2)
    // margin: `${marginTop} ${marginLeft}`,
  let styleTracks = {
    position: 'absolute',
    top: '25%',
    left: '76%',
    display: 'table',
    color: 'white',
    fontSize: '3vw',
    marginRight: props.width
  }

  let styleFontTitle = {
    fontSize: '2.2vw',
    margin: 0
  }
  let styleFontSub = {
    fontSize: '1.2vw',
    color: '#FBE3B9',
    margin: 0
  }

  // console.log(this.props.tracks[0].sub)

  return(
    <Button.Group attached='top' vertical style={{...styleTracks}} className="divText">


      {props.tracks.map(t => (
        <Button compact basic color='white'>
          <h4 style={{...styleFontTitle}}>{t.title}</h4>
          <p style={{...styleFontSub}}>{t.sub}</p>
        </Button>
      ))}
    </Button.Group>
  )
}

export default Tracks
