import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
<header>
  <h2><a>ghosts collection</a></h2>
  <nav>
  <li><a>New GhostApp</a></li>
  <li><a>home</a></li>
  <li><a>About</a></li>
  <li><a>contact developer</a></li>
</nav>
</header>

    );
  }
}

export default Navbar;
