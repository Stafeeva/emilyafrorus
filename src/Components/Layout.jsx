import React from 'react';

import Navigation from './Navigation';

import './layout.css';

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <Navigation />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
