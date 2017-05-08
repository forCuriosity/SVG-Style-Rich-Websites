import React from 'react'

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


  // console.log(this.props.tracks[0].sub)

  return(
    <div style={{...styleTracks}} className="divtext">
      <h4 style={{...styleFontTitle}}>Track #1</h4>
      <p style={{...styleFontSub}}>IN F MINOR FOR GALA EVENT</p>
      <h4 style={{...styleFontTitle}}>Track #2</h4>
      <p style={{...styleFontSub}}>IN G MAJOR FOR COMERCIAL</p>
    </div>
  )
}

export default Tracks
