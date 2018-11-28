import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import anime from 'animejs';

class App extends Component {
  componentDidMount() {
    anime({
      targets: '#animated',
      translateX: [
        { value: 100, duration: 1200 },
        { value: 0, duration: 800 }
      ],
      rotate: '1turn',
      backgroundColor: '#FFF',
      duration: 2000,
      loop: true
    })

    anime({
      targets: '#animated2',
      translateX: [
        { value: 5, duration: 1200 },
        { value: 0, duration: 800 }
      ],
      rotate: '2turn',
      backgroundColor: '#FFF',
      duration: 5000,
      loop: true
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
