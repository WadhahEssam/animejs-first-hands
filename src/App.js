import React, { Component } from 'react';
import './App.css';
import anime from 'animejs';
import testSvg from './test-icon-svg.svg';

class App extends Component {

  state = {
    counter: 1
  }
  
  componentDidMount() {
    anime({
      targets: '#animated',
      translateX: 200,
      backgroundColor: '#FFF',
      duration: 4000,
      loop: true
    })

    anime({
      delay: 400,
      targets: '#animated2',
      opacity: .1,
      translateX: '240px',
      scale: 2,
      marginBottom: 40,
      marginTop: 40,
      backgroundColor: '#FFF',
      borderRadius: '50%',
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: 6,
      rotate: '1.5turn'
    });

    anime({
      delay: 400,
      targets: '#animated3',
      translateX: [-100, 100],
      opacity: .1,
      height: '*=2',
      marginBottom: 40,
      marginTop: 40,
      backgroundColor: '#FFF',
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: 6,
      rotate: '1.5turn'
    });

    anime({
      delay: 400,
      targets: '#animated4',
      translateX: [-100, 100],
      opacity: .1,
      backgroundColor: '#FFF',
      easing: 'easeInOutQuad',
      direction: 'alternate',
      loop: true,
    });
    
    var obj = { charged: 1};
    anime({
      targets: obj,
      charged: 100,
      easing: 'linear',
      update: function() {
        var el = document.querySelector('#counter');
        el.innerHTML = parseInt(obj.charged);
      },
    });

    var obj2 = { charged: '0%' };
    var basicTimeline = anime.timeline({loop: true});
    basicTimeline
      .add({
        targets: obj2,
        charged: 100,
        easing: 'linear',
        update: function() {
          var el = document.querySelector('#counter2');
          el.innerHTML = parseInt(obj2.charged);
        },
        duration: 3000
      })
      .add({
        targets: obj2,
        charged: 0,
        easing: 'linear',
        update: function() {
          var el = document.querySelector('#counter2');
          el.innerHTML = parseInt(obj2.charged);
        },
        duration: 3000
      })
      .add({
        targets: '#mainCounter',
        translateX: 20,
        easing: 'linear',
      })
      .add({
        targets: '#mainCounter',
        translateX: -20,
        easing: 'linear',
      })
      .add({
        targets: '#mainCounter',
        translateX: 0,
        easing: 'linear',
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <svg width="500" height="500" style={{border: '1px solid white', marginBottom: 10}}>
          <rect x="100" y="250" rx="20" ry="20" strokeWidth="100" width="150" height="150" />
            <circle cx="75" cy="75" r="50" stroke="#8C5650" strokeWidth="3" fill="#C2776F" />
            Sorry, your browser does not support inline SVG.
          </svg> 

          {/* <img src={testSvg} className="test-svg" alt="testSvg" /> */}
          <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1366 768' fill="#91494E">
            <polygon className='st0' points='437,460.5 437,265.4 606,167.8 775,265.4 775,460.5 606,558.1 700'
            />
            <path className='st1' d='M606,171.3l166,95.8v191.7l-166,95.8l-166-95.8V267.1L606,171.3 M606,164.4l-172,99.3v198.6l172,99.3l172-99.3 V263.7L606,164.4L606,164.4z'
            />
            <g>
              <path className='st2' d='M353.3,489.9' />
            </g>
          </svg>

          <div id="svgAttributes"> 
            <svg width="128" height="128" viewBox="0 0 128 128">
              <polygon points="64 69.03970505015754 8.574 99.97306569742874 63.07651523732741 67.43974602106434 64 3.973065697428737 64.92348476267259 67.43974602106434 119.426 99.97306569742874 " fill="currentColor"></polygon>
            </svg> 
          </div>

          <div id="animated" style={{backgroundColor: '#43484e', height: 100, width: 100}} />
          <br />
          <div id="animated2" style={{backgroundColor: '#43484e', height: 100, width: 100, borderRadius: 10}} />
          <br /> 
          <div id="animated3" style={{backgroundColor: '#43484e', height: 100, width: 100, borderRadius: 10}} />
          <br /> 
          <div id="animated4" style={{backgroundColor: '#43484e', height: 100, width: 100, borderRadius: 10}} />
          <h1>Counter : <span id="counter"></span>%</h1>
          <br/>
          <h1 id="mainCounter">Counter : <span id="counter2"></span>%</h1>
        </header>
      </div>
    );
  }
}

export default App;
