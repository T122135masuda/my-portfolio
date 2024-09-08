import React from 'react';
import './MediaSection.css';

const mediaEntries = [
  {
    date: '2023年10月10日',
    projectName: 'VitaLinkプロジェクト',
    description: 'VitaLinkプロジェクトでの活動がメディアに掲載されました。地域医療の発展に貢献する新しいプラットフォームの開発。',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // 埋め込み動画のリンク
    image: 'https://via.placeholder.com/300?text=VitaLink+Image',
    website: 'https://example.com/vitalink',
  },
  {
    date: '2024年2月15日',
    projectName: 'Suwa RPG プロジェクト',
    description: 'Suwa RPGプロジェクトが地域新聞に紹介されました。地域の観光資源をゲームを通じて紹介する新しい取り組み。',
    video: null, // 動画がない場合
    image: 'https://via.placeholder.com/300?text=Suwa+RPG+Image',
    website: 'https://example.com/suwarpg',
  },
  {
    date: '2024年3月1日',
    projectName: 'VR プロジェクト',
    description: 'VR技術を用いた新しい教育プログラムがテレビで紹介されました。',
    video: 'https://www.youtube.com/embed/9bZkp7q19f0',
    image: null, // 画像がない場合
    website: 'https://example.com/vrproject',
  },
];

export default function MediaSection() {
  return (
    <div className="media-section">
      <h2>メディア掲載</h2>
      <div className="media-entries">
        {mediaEntries.map((entry, index) => (
          <div key={index} className="media-card">
            <h3 className="media-project-name">{entry.projectName}</h3>
            <p className="media-date">{entry.date}</p>
            <p className="media-description">{entry.description}</p>
            {entry.video && (
              <div className="media-video">
                <iframe
                  src={entry.video}
                  title="Media Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {entry.image && (
              <div className="media-image">
                <img src={entry.image} alt={entry.projectName} />
              </div>
            )}
            {entry.website && (
              <p className="media-link">
                <a href={entry.website} target="_blank" rel="noopener noreferrer">
                  ウェブサイトを見る
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
