import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

// ローカルの画像をインポート
import vita1 from '../assets/project-pic/vita1.png';
import vita2 from '../assets/project-pic/vita2.png';

const projects = [
  { 
    date: '代表', 
    title: 'VitaLinkプロジェクト', 
    description: '「訪問診療において、医者と介護士の間で高齢者の情報共有が円滑に行えていない」という課題を解決すべく',
    heading: (
      <>
        富士見高原病院×公立諏訪東京理科大学<br />
        地域医療・福祉 をDXする
      </>
    ),
    images: [
      vita1,  // ここでローカル画像1を使用
      vita2,  // ここでローカル画像2を使用
      'https://via.placeholder.com/300?text=VitaLink+3', // 残りの画像はそのまま
    ],
  },
  { 
    date: '代表', 
    title: 'Suwa RPG プロジェクト', 
    description: 'Suwa RPGプロジェクトは、地域の観光資源を活用したローカルRPGを開発し、観光客を魅了することを目指しています。',
    heading: (
      <>
        諏訪市×公立諏訪東京理科大学<br />
        諏訪の魅力をゲームで伝える
      </>
    ),
    images: [
      'https://via.placeholder.com/300?text=Suwa+RPG+1',
      'https://via.placeholder.com/300?text=Suwa+RPG+2',
      'https://via.placeholder.com/300?text=Suwa+RPG+3',
    ],
  },
  { 
    date: '代表', 
    title: 'VR プロジェクト', 
    description: 'VRプロジェクトは、仮想現実技術を活用して、教育や訓練の新しい体験を提供することを目指しています。',
    heading: (
      <>
        諏訪市×公立諏訪東京理科大学<br />
        そのとき感じた臨場感をもう一度
      </>
    ),
    images: [
      'https://via.placeholder.com/300?text=VR+1',
      'https://via.placeholder.com/300?text=VR+2',
      'https://via.placeholder.com/300?text=VR+3',
    ],
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleProjectClick = (project) => {
    setExpandedProject(expandedProject === project ? null : project);
  };

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-card"
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          onClick={() => handleProjectClick(project)}
        >
          {/* 常に表示する部分 */}
          <div className="project-header">
            <div className="project-date">{project.date}</div>
            <div className="project-title">{project.title}</div>
            <div className="project-heading" style={{ fontWeight: 'bold', marginTop: '5px' }}>{project.heading}</div> {/* 太字で見出しを表示 */}
          </div>

          {/* 開いたときのみ表示する部分 */}
          {expandedProject === project && (
            <motion.div
              className="project-details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p>{project.description}</p>
              
              <div className="project-images">
                {project.images.map((image, i) => (
                  <Zoom key={i}>
                    {/* onClick の伝播を停止して、画像クリック時に他のイベントが発火しないようにする */}
                    <img 
                      src={image} 
                      alt={`${project.title} ${i + 1}`} 
                      onClick={(e) => e.stopPropagation()} // これでズーム中にタブが閉じない
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

export default Projects;
