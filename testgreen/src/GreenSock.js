import React, { Component } from 'react';
import { TweenMax, Bounce } from 'gsap';

// class GreenSock extends React.Componet {
//   constructor(props) {
//     super(props);
//     // reference to the DOM node
//     this.myElement = null;
//     // reference to the animation
//     this.myTween = TimelineLite({paused: true});
//   }

//   componentDidMount() {
//     this.myTween
//     .to(this.myElement, 0.5, {x: 100})
//     .to(this.myElement, 0.5, {y: 100, rotation: 180})
//     .play();
//   }

//   render() {
//     return <div ref={div => (this.myElement = div)} />;
//   }
// }


class GreenSock extends Component {
    constructor(){
      super();
      this.startPath = null;
      this.endPath = null;
      this.svgTween = null;
    }
    
    componentDidMount(){
      this.svgTween = TweenMax.to(this.startPath, 1, {
        morphSVG:{shape: this.endPath, shapeIndex: 12},
        fill: "#ff0000",ease:Bounce.easeOut
      });
    }
    
    render(){
      return (
        <div>
          <svg id="Layer_6" data-name="Layer 6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136.66 171.86">
            <defs></defs>
            <title>redditlogo</title>
            <path ref={path => this.startPath = path} id="start" className="cls-1" d="..." />
            <path ref={path => this.endPath = path} id="end"  className="cls-2" d="..." />
          </svg>
          <h1 onClick={ () => this.svgTween.play() }>Testing GreenSock</h1>
          <h3>or</h3>
          <h1 onClick={ () => this.svgTween.reverse() }>IT WORKS</h1>
        </div>
      );
    }
  }
  
export default GreenSock;