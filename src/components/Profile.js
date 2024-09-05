
import React from 'react';
import './Profile.css';
import profilePhoto from '../assets/nari.png'; // 画像ファイルをインポート

export default function Profile() {
  return (
    <div className="profile-section">
      <img src={profilePhoto} alt="Your Name" className="profile-photo" />
      <div className="profile-description">
        <h2>私の自己紹介</h2>
        <p>
          私の名前は[あなたの名前]です。Web開発に情熱を持っており、特にReactを使用したインタラクティブなUIの構築に興味があります。
          日々の学びを大切にし、新しい技術を試すことが大好きです。このポートフォリオは私の最近の活動と成果をまとめたものです。
        </p>
      </div>
    </div>
  );
}
