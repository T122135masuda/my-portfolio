// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(''); // アクティブなリンクを管理するステート

  const handleLinkClick = (link) => {
    setActiveLink(link); // クリックされたリンクをアクティブに設定
    setIsOpen(false); // メニューを閉じる
  };

  return (
    <nav className="navbar">
      <button
        className={`navbar-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="menu-text">MENU</span> {/* MENUテキストを追加 */}
      </button>
      <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <a
            href="#introduction"
            className={activeLink === 'introduction' ? 'active' : ''}
            onClick={() => handleLinkClick('introduction')}
          >
            自己紹介
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="#projects"
            className={activeLink === 'projects' ? 'active' : ''}
            onClick={() => handleLinkClick('projects')}
          >
            プロジェクト
          </a>
        </li>
        <li className="navbar-item">
          <a
            href="#events"
            className={activeLink === 'events' ? 'active' : ''}
            onClick={() => handleLinkClick('events')}
          >
            イベント
          </a>
        </li>
        {/* <li className="navbar-item">
          <a
            href="#career-focus"
            className={activeLink === 'career-focus' ? 'active' : ''}
            onClick={() => handleLinkClick('career-focus')}
          >
            就活の軸
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
