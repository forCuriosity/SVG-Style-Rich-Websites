import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import SVG from 'svg.js'

// import './TilesSharp.css'
// import './tilesSquaresCircles'

class TilesSharp extends Component {

  boo(){
    document.addEventListener('DOMContentLoaded', function() {
      if (SVG.supported) {
        requestAnimationFrame(function() {


          var w = window,
              d = document,
              e = d.documentElement,
              g = d.getElementsByTagName('body')[0],
              x = w.innerWidth || e.clientWidth || g.clientWidth,
              y = w.innerHeight|| e.clientHeight|| g.clientHeight,
              xx = w.innerWidth || e.clientWidth || g.clientWidth,
              yy = w.innerHeight|| e.clientHeight|| g.clientHeight;
              // TEST for values
              // BEST-PRACTICE Rerun these variables every 2 seconds, if they are differnt, animate to new #

              x = (Math.round(x / 100) * 100) +100;
              y = (Math.round(y / 150) * 150) +150;
              // BEST-PRACTICE: Math.roundUp()
              // TEST: rounded # is near original
              // EXPLAIN: Round # of tiles to viewbox
              // TODO: Animate x,y values upon load. from large to small

          var draw = SVG('TilesSharp').size(xx, yy).spof().viewbox(0, 0, xx, yy);


          var bg = draw.symbol()
          bg.rect(100, 75).attr({fill:'#000000'})

          // DEFS

          var patternVerticalStripes = draw.pattern(200, 15, function(add) {
            add.rect(200,6.8).fill('#ffffff')
          });

          var bgStripesAndOverlay = draw.symbol()
          bgStripesAndOverlay.rect(200,200).attr({ fill: patternVerticalStripes })
          bgStripesAndOverlay.rect(200,15).addClass('lead').attr({fill:'#000000'})
          bgStripesAndOverlay.rect(200,30).move(0,104).addClass('lead').attr({ fill:'#000000' })
          // @Challenge: animate bgStripesAndOverlay.move(x) value.

          var tileLL = draw.use(bgStripesAndOverlay).addClass('rotate').move(-25,-25).rotate(216.5);
          // @challenge: rotate rectRotatedStripes $@%!

          var tileLR = tileLL.move(10,30);
          // Rect for LR
          var bgStripesAndOverlayRotated = draw.use(bgStripesAndOverlay).addClass('rotate').attr({ fill: patternVerticalStripes }).move(-25,-25).rotate(323.5);

          var symbolTileTL = draw.symbol();
          symbolTileTL
            .add(draw.use(bg))
            .add(tileLR)
            .maskWith(draw.rect(100,75).fill('#ffffff'));

          var symbolTileTR = draw.symbol();
          symbolTileTR
            .add(draw.use(bg))
            .add(bgStripesAndOverlayRotated)
            .maskWith(draw.rect(100,75).fill('#ffffff'));


          var tileRight = draw.use(symbolTileTL).move(100,0)
          var tileLeft = draw.use(symbolTileTR).move(0,0).rotate(0)

          var tileBL = draw.use(symbolTileTL).move(0,75)
          var tileBR = draw.use(symbolTileTR).move(100,75)

          var patternTileStrips = draw.pattern(200,150, function(add){ });
          patternTileStrips.add(tileLeft)
          patternTileStrips.add(tileRight)
          patternTileStrips.add(tileBL)
          patternTileStrips.add(tileBR)

          var containerTilesStripes = draw.rect(x,y).attr({ fill: patternTileStrips });

          var circleS = draw.circle(45).move(21,21).attr({ fill:'rgba(38,17,177, 1)'});
          var circleM = draw.circle(62).move(12.5,12.5).attr({ fill:'rgba(255,255,255,1)'});
          var circleL = draw.circle(88).move(0,0).attr({ fill:'rgba(38,17,177, 1)'});

          var symbolCircles = draw.symbol();
          symbolCircles
          .add(circleL)
          .add(circleM)
          .add(circleS)
          symbolCircles.move(43,43)

          var useCirclesA = draw.use(symbolCircles).move(12.5,-12.5);
          var useCirclesB = draw.use(symbolCircles).move(12.5,-12.5);

          var patternCirclesA = draw.pattern(200,150, function(add){ });
          patternCirclesA.add(useCirclesA).move(-100,0)
          var containerTilesCirclesA = draw.rect(x,y).attr({ fill: patternCirclesA });


          var patternCirclesB = draw.pattern(200,150, function(add){ });
          patternCirclesB.add(useCirclesB).move(0,75)
          var containerTilesCirclesB = draw.rect(x,y).attr({ fill: patternCirclesB });


        }); } else { alert('SVG not supported');} }, false);
  }

  render(){
    this.boo()
    return(
    <Container fluid className="TilesSharp" id="TilesSharp" />
    );
  }
}

export default TilesSharp
