import React from 'react'
import { Container } from 'semantic-ui-react'
import SVG from 'svg.js'

const TilesSharp = (props) => {
    document.addEventListener('DOMContentLoaded', function() {
      if (SVG.supported) {
        requestAnimationFrame(function() {

              let {x, y} = props.viewBox

              let xx = props.viewBox.x
              let yy = props.viewBox.y
              // TEST for values

              x = (Math.round(x / 100) * 100) +100;
              y = (Math.round(y / 150) * 150) +150;
              // BEST-PRACTICE: Math.roundUp()
              // TEST: rounded # is near original
              // EXPLAIN: Round # of tiles to viewbox
              // TODO: Animate x,y values upon load. from large to small

          var draw = SVG('TilesSharp').size(xx, yy).spof().viewbox(0, 0, xx, yy);


          var Arrows = draw.symbol()
          Arrows.rect(100, 75).attr({fill:'#000000'})

          var containerTilesCirclesB = draw.rect(x,y).attr({ fill: 'black' });


        }); } else { alert('SVG not supported');} }, false);

    return(
    <Container fluid className="TilesSharp" id="TilesSharp" />
    );

}

export default TilesSharp
