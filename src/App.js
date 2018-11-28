import React, { Component } from 'react';
import './App.css';
import anime from 'animejs';

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
      targets: '#animated2',
      left: '80%',
      round: 1,
      opacity: .8,
      backgroundColor: '#FFF',
    })

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
        duration: 4000
      })
      .add({
        targets: obj2,
        charged: 0,
        easing: 'linear',
        update: function() {
          var el = document.querySelector('#counter2');
          el.innerHTML = parseInt(obj2.charged);
        },
        duration: 4000
      })
      // .add({
      //   targets: '#basicTimeline .triangle.el',
      //   translateX: 250,
      //   easing: 'easeOutExpo'
      // });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="animated" style={{backgroundColor: '#43484e', height: 100, width: 100}} />
          <br />
          <div id="animated2" style={{backgroundColor: '#43484e', height: 100, width: 100}} />
          <h1>Counter : <span id="counter"></span>%</h1>
          <br/>
          <h1>Counter : <span id="counter2"></span>%</h1>
        </header>
      </div>
    );
  }
}

export default App;
