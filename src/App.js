import React from 'react';
import Profile from './components/Profile';
import Projects from './components/Projects';
import JoinEvents from './components/Join-Events';  // 新しいJoinEventsコンポーネントをインポート

export default function App() {
  return (
    <div>
      <Profile />
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>進行中プロジェクト</h1>
      <Projects />
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>参加中のイベント</h1>
      <JoinEvents />  {/* 新しいJoinEventsコンポーネントを表示 */}
    </div>
  );
}
