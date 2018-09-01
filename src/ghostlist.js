import React, {Component} from 'react';
import propTypes from 'prop-types';
import Ghost from './ghost';

import './ghostlist.css'

class GhostList extends Component {
  static defaultProps = {
    ghosts: [
      {
        title: "Annabelle",
        instructions: "Just run away",
        character: ["seems cute", "doll", "small"],
        img: "04.jpeg"
      },
      {
        title: "Unknown",
        instructions: "no need to run coz you'll definitly die.",
        character: ["shouts", "kills", "scary"],
        img: "01.jpeg"
      },
      {
        title: "UnNamed",
        instructions: "more research needed for this ghost.",
        character: ["tall", "in garages", "more research needed"],
        img: "02.jpeg"
      }
    ]
  }
  static propTypes = {
    // ghosts = propTypes.arrayOf(PropTypes.object)
  }
  render () {
    const ghosts = this.props.ghosts.map((r,index) => (
      <Ghost key={index} {...r} />
    ));
    return (
      <div className="ghostlist" >
      {ghosts}
      </div>
    )
  }
}

export default GhostList
