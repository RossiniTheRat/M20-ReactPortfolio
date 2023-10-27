import React from 'react';

function Navigation(props) {
  return (
    <nav>
      <ul>
        <li><button onClick={() => props.onSelect('home')}>Home</button></li>
        <li><button onClick={() => props.onSelect('about')}>About</button></li>
        <li><button onClick={() => props.onSelect('portfolio')}>Portfolio</button></li>
        <li><button onClick={() => props.onSelect('contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}

function Header(props) {
  return (
    <header>
      <Navigation onSelect={props.onSelect} />
    </header>
  );
}

export default Header;