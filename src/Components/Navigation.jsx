import React from 'react';
import {Link} from "react-router-dom";

import instaLogo from './../images/icons/insta_logo.png';

import './navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="title-holder">
          <Link to="/" className="navigation-link">
            <h1 className="title">Эмили Тсикплону</h1>
          </Link>
        </div>
        <div className="nav-links-holder">
          <Link to="/about" className="navigation-link">Об Эмили</Link>
          <Link to="/portfolio" className="navigation-link">Портфолио</Link>
          <Link to="/contacts" className="navigation-link">Контакты</Link>
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
        </div>
      </div>
    );
  }
}

export default Navigation;
