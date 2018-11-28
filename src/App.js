import React, { Component } from 'react';
import './App.css';
import anime from 'animejs';

class App extends Component {
  componentDidMount() {
    anime({
      targets: '#animated',
      translateX: [
        { value: 100, duration: 1200 },
        { value: 50, duration: 800 }
      ],
      backgroundColor: '#FFF',
      duration: 4000,
      loop: true
    })

    anime({
      targets: '#animated2',
      left: '80%',
      opacity: .8,
      backgroundColor: '#FFF',
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="animated" style={{backgroundColor: '#43484e', height: 100, width: 100}} />
          <br />
          <div id="animated2" style={{backgroundColor: '#43484e', height: 100, width: 100}} />
        </header>
      </div>
    );
  }
}

export default App;
