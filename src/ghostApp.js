import React, { Component } from 'react';
import logo from './logo.svg';
import './ghostApp.css';
import Ghost from './ghost.js'
import Navbar from './navbar.js'

class GhostApp extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Ghost
      title="annabelle"
      character={['small','doll']}
      instructions="run away"
      img="04.jpeg"  />
      </div>
    );
  }
}

export default GhostApp;
