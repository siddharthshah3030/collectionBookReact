import React, { Component } from 'react';
import logo from './logo.svg';
import './ghostApp.css';
import Ghost from './ghost.js';
import Navbar from './navbar.js';
import Ghostlist from './ghostlist';

class GhostApp extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
  <Ghostlist />
      </div>
    );
  }
}

export default GhostApp;
