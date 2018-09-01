import React, { Component } from 'react';
import logo from './logo.svg';
import './ghostApp.css';
import Ghost from './ghost.js'

class GhostApp extends Component {
  render() {
    return (
      <div className="App">
      <Ghost />
      </div>
    );
  }
}

export default GhostApp;
