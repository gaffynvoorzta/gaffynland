import React from 'react';
//import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {

  const navStyle = {
      color: 'white'
  };

  return (
    <div>
      <nav>
          <h3>GaffynLand</h3>
          <ul className='nav-links'>
              <Link style={navStyle} to ='/'>
                <li>Home</li>
              </Link>
              <Link style={navStyle} to='/about'>
                <li>Not Dog</li>
              </Link>
              <Link style={navStyle} to='/extra'>
                <li>Not Cat</li>
              </Link>
          </ul>
      </nav>
    </div>
  );
}

export default Nav;