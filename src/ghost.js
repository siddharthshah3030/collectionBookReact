import React, { Component } from 'react';
import logo from './logo.svg';
import './ghost.css';
class Ghost extends Component {
  render() {
const {title, img, instructions} = this.props;
const characters = this.props.character.map((c,i) => (
  <li key={i}> {c}</li>
))

    return (
      <div className="ghostcard">
      <div ClassName="ghostcardimg">
        <img src={img} alt={title}/>
      </div>
      <div className="ghostcardcontent">
        <h3 className="ghosttitle" > Ghosts  {title}</h3>
        <h4>characters</h4>
        <ul>
        {characters}
        </ul>
        <h4>Instructions</h4>

        <p>{instructions}
        </p>

      </div>
      </div>
    );
  }
}

export default Ghost;
