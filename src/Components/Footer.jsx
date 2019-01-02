import React from 'react';

import instaLogo from './../images/icons/insta_logo.png';

import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
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
      </footer>
    )
  }
}

export default Footer;
