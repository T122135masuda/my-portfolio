import React from 'react';
import Profile from './components/Profile';
import Projects from './components/Projects';
import JoinEvents from './components/Join-Events';
import Navbar from './components/Navbar'; // 新しいNavbarコンポーネントをインポート
import './App.css'; // App.cssをインポート

const App = () => {
  return (
    <div className="App"> {/* Appクラスを追加 */}
      {/* 背景スタイルを正しく適用するためのクラス */}

      {/* 自己紹介セクション */}
      <section id="introduction">
        <Profile />
      </section>

      {/* 自己紹介の下にナビゲーションバーを配置 */}
      <Navbar />

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

      {/* 就活の軸セクション */}
      <section id="career-focus">
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>就活の軸</h1>
        <p style={{ textAlign: 'center', margin: '20px' }}>
          あなたの就活の軸に関する説明をここに追加します。
        </p>
      </section>
    </div>
  );
};

export default App;
