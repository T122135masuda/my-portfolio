// 必要なReactの機能（useState）をインポート
import React, { useState } from 'react';
// アニメーションライブラリFramer Motionをインポート
import { motion } from 'framer-motion';
// CSSスタイルをインポート
import './Projects.css';
// 画像ズームライブラリをインポート
import Zoom from 'react-medium-image-zoom';
// 画像ズーム用のスタイルをインポート
import 'react-medium-image-zoom/dist/styles.css';

// ローカル画像のインポート
import vita1 from '../assets/project-pic/vita1.png';
import vita2 from '../assets/project-pic/vita2.png';
import vita3 from '../assets/project-pic/vita3.png';
import RPG1 from '../assets/project-pic/RPG1.png';
import RPG2 from '../assets/project-pic/RPG2.png';

// プロジェクトのデータを配列で定義
const projects = [
  {
    // プロジェクトの役割
    date: '代表',
    // プロジェクトのタイトル
    title: 'VitaLinkプロジェクト',
    // プロジェクトの見出し（JSXを使って改行や装飾を指定）
    heading: (
      <>
        富士見高原病院×公立諏訪東京理科大学<br />
        地域医療・福祉 をDXする
      </>
    ),
    // プロジェクトで使用する画像
    images: [vita1, vita2, vita3],
  },
  {
    date: '代表',
    title: 'Suwa RPG プロジェクト',
    heading: (
      <>
        諏訪市×公立諏訪東京理科大学<br />
        諏訪の魅力をゲームで伝える
      </>
    ),
    images: [RPG1, RPG2],
  },
  {
    date: '代表',
    title: 'VR プロジェクト',
    heading: (
      <>
        諏訪市×公立諏訪東京理科大学<br />
        そのとき感じた臨場感をもう一度
      </>
    ),
    images: [],
  },
];

// Projectsコンポーネントを定義
const Projects = () => {
  // 現在拡張表示されているプロジェクトを追跡するstate
  const [expandedProject, setExpandedProject] = useState(null);

  // プロジェクトカードをクリックしたときの動作を定義
  const handleProjectClick = (project) => {
    // 同じプロジェクトがクリックされた場合は閉じる、違う場合はそのプロジェクトを開く
    setExpandedProject(expandedProject === project ? null : project);
  };

  return (
    // プロジェクト全体を囲むコンテナ
    <div className="projects-container">
      {projects.map((project, index) => (
        // 各プロジェクトをモーションカードで表示
        <motion.div
          key={index} // 各プロジェクトにユニークなキーを設定
          className="project-card"
          whileHover={{ scale: 1.05 }} // ホバー時に拡大するアニメーション
          initial={{ opacity: 0, y: 20 }} // 初期状態（フェードインアニメーション用）
          animate={{ opacity: 1, y: 0 }} // アニメーション完了後の状態
          transition={{ duration: 0.5, delay: index * 0.2 }} // アニメーションのタイミング
          onClick={() => handleProjectClick(project)} // クリックイベントを設定
        >
          {/* プロジェクトの基本情報を表示 */}
          <div className="project-header">
            <div className="project-date">{project.date}</div>
            <div className="project-title">{project.title}</div>
            <div
              className="project-heading"
              style={{ fontWeight: 'bold', marginTop: '5px' }}
            >
              {project.heading} {/* 太字で見出しを表示 */}
            </div>
          </div>

          {/* 詳細情報を展開表示する部分 */}
          {expandedProject === project && (
            <motion.div
              className="project-details"
              initial={{ opacity: 0 }} // 初期は透明
              animate={{ opacity: 1 }} // 表示アニメーション
              transition={{ duration: 0.5 }} // アニメーションの時間
            >
              {/* プロジェクトの説明文（必要ならここに内容を追加） */}
              <p>{project.description}</p>

              {/* プロジェクトの画像をズーム可能に表示 */}
              <div className="project-images">
                {project.images.map((image, i) => (
                  <Zoom key={i}>
                    {/* ズーム画像クリック時に他のイベントが発火しないようにする */}
                    <img
                      src={image}
                      alt={`${project.title} ${i + 1}`} // 画像の代替テキスト
                      onClick={(e) => e.stopPropagation()} // クリックイベントの伝播を停止
                    />
                  </Zoom>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Projects; // 他のファイルでこのコンポーネントを使用可能にするためにエクスポート
