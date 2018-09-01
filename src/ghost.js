import React, { Component } from 'react';
import logo from './logo.svg';
import './ghostApp.css';
class Ghost extends Component {
  render() {
const {title} = this.props;
const characters = this.props.character.map((c,i) => (
  <li key={i}> {c}</li>
))
    return (
      <div>
      <div > Ghosts  {title}
      </div>
      <ul>
      {characters}
      </ul>
      </div>
    );
  }
}

export default Ghost;
