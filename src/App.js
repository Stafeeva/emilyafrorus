import React, { Component } from 'react';
import './App.css';

import instaLogo from './images/icons/insta_logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Emily</h1>
          <p>This website is under construction. Check back soon!</p>
          <a
            href="https://www.instagram.com/emily_the_afrorussian"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img
              className="insta-icon"
              alt=""
              src={instaLogo} />
          </a>
        </header>
      </div>
    );
  }
}

export default App;
