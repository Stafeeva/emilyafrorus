import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import About from './Pages/About';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Contacts from './Pages/Contacts';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </Router>
    );
  }
}

export default App;
