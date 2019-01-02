import React from 'react';
import {Link} from "react-router-dom";

import Footer from './Footer';

import './navigation.css';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <Link to="/" className="navigation-link">
          <h1 className="title">Эмили Тсикплону</h1>
        </Link>
        <Link to="/about" className="navigation-link">Об Эмили</Link>
        <Link to="/portfolio" className="navigation-link">Портфолио</Link>
        <Link to="/contacts" className="navigation-link">Контакты</Link>
        <Footer />
      </div>
    );
  }
}

export default Navigation;
