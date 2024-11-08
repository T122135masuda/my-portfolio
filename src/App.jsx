import React from 'react';
import Profile from './components/Profile';
import Projects from './components/Projects';
import JoinEvents from './components/Join-Events';
import Navbar from './components/Navbar';
import MediaSection from './components/MediaSection';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* ナビゲーションバーを最上部に配置 */}
      <Navbar />

      {/* 自己紹介セクション */}
      <section id="introduction">
        <Profile />
      </section>

      {/* プロジェクトセクション */}
      <section id="projects">
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>進行中プロジェクト</h1>
        <Projects />
      </section>

      {/* イベントセクション */}
      <section id="events">
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>参加中のイベント</h1>
        <JoinEvents />
      </section>
      
      {/* メディア掲載セクション */}
      {/* <section id="media">
        <MediaSection />
      </section> */}

      {/* 就活の軸セクション */}
      {/* <section id="career-focus">
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>就活の軸</h1>
        <p style={{ textAlign: 'center', margin: '20px' }}>
         
        </p>
      </section> */}
    </div>
  );
};

export default App;
