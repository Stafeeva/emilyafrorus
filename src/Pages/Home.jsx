import React from 'react';

import Layout from './../Components/Layout';

import './home.css';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <div className="home">
          <div className="image-container image-container--first" />
          <div className="image-container image-container--second" />
          <div className="image-container image-container--third" />
        </div>
      </Layout>
    );
  }
}

export default Home;
