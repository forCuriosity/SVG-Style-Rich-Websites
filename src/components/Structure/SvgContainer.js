import React from 'react'
import { Container } from 'semantic-ui-react'
import SVG from 'svg.js'

const Container = (props) => {
  return(

    document.addEventListener('DOMContentLoaded', function() {
      if (SVG.supported) {
        requestAnimationFrame(function() {


        }); } else { alert('SVG not supported');} }, false);

    );

}

export default Container
