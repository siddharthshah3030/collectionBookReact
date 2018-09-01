import React, { Component } from 'react';
import logo from './logo.svg';
import './ghostApp.css';
import Ghost from './ghost.js'

class GhostApp extends Component {
  render() {
    return (
      <div className="App">
      <Ghost title="annabelle" character={['small','doll']}  />
      </div>
    );
  }
}

export default GhostApp;
