import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#introduction">自己紹介</a></li>
        <li className="navbar-item"><a href="#projects">プロジェクト</a></li>
        <li className="navbar-item"><a href="#events">イベント</a></li>
        <li className="navbar-item"><a href="#career-focus">就活の軸</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
