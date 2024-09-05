import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  { 
    date: '代表', 
    title: 'VitaLinkプロジェクト', 
    description: 'VitaLinkプロジェクトは、次世代のヘルスケアプラットフォームを開発することを目的としています。患者と医療従事者をつなぎ、データドリブンな医療を実現します。',
    images: [
      'https://via.placeholder.com/300?text=VitaLink+1',
      'https://via.placeholder.com/300?text=VitaLink+2',
      'https://via.placeholder.com/300?text=VitaLink+3',
    ],
  },
  { 
    date: '代表', 
    title: 'Suwa RPG プロジェクト', 
    description: 'Suwa RPGプロジェクトは、地域の観光資源を活用したローカルRPGを開発し、観光客を魅了することを目指しています。',
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
    images: [
      'https://via.placeholder.com/300?text=VR+1',
      'https://via.placeholder.com/300?text=VR+2',
      'https://via.placeholder.com/300?text=VR+3',
    ],
  },
];

export default function Projects() {
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
          style={{ backgroundColor: index % 2 === 0 ? '#e3f2fd' : '#fce4ec' }} // カードの背景色を交互に変更
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          onClick={() => handleProjectClick(project)}
        >
          <div className="project-date">{project.date}</div>
          <div className="project-title">{project.title}</div>
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
                  <img key={i} src={image} alt={`${project.title} ${i + 1}`} />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
