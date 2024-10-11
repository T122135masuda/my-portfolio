import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#projects">プロジェクト</a></li>
        <li className="navbar-item"><a href="#events">イベント</a></li>
        <li className="navbar-item"><a href="#career-focus">Not yet</a></li>
        <li className="navbar-item"><a href="#introduction">Not yet</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
