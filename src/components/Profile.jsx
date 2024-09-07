import React from 'react';
import './Profile.css';
import profilePhoto from '../assets/nari.png'; // 画像ファイルをインポート
import { FaUniversity, FaMapMarkerAlt, FaGithub, FaUser, FaBook, FaMicroscope, FaSmile, FaUsers, FaMedal, FaRegTired } from 'react-icons/fa'; // アイコンをインポート
import { motion } from 'framer-motion'; // framer-motionをインポート

// プロフィール項目のアニメーション設定
const itemVariants = {
  hidden: (i) => ({ opacity: 0, x: i % 2 === 0 ? -50 : 50 }), // 左右交互のスライドイン
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

// アイコンのマッピング
const profileData = [
  { text: '氏名: 増田 晃大', icon: <FaUser /> },
  { text: '大学名: [大学名]', icon: <FaUniversity /> },
  { text: '学部/学科: [学部名/学科名]', icon: <FaBook /> },
  { text: '研究室: [研究室名]', icon: <FaMicroscope /> },
  { text: '出身地: [出身地]', icon: <FaMapMarkerAlt /> },
  { text: '趣味: [趣味]', icon: <FaSmile /> },
  { text: 'サークル: [サークル名]', icon: <FaUsers /> },
  { text: '強み: [強みの内容]', icon: <FaMedal /> },
  { text: '弱み: [弱みの内容]', icon: <FaRegTired /> },
  { text: 'GitHub のアカウント: [GitHubのリンク]', icon: <FaGithub /> },
];

const Profile = () => (
  <div className="profile-section">
    <img src={profilePhoto} alt="Your Name" className="profile-photo" />
    <div className="profile-description">
      <h2>私のプロフィール</h2>

      <motion.div 
        className="profile-details"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }} // 子要素のアニメーションを順番に実行
      >
        {profileData.map((item, i) => (
          <motion.div className="profile-item" key={i} custom={i} variants={itemVariants}>
            <span className="profile-icon">{item.icon}</span> {/* 各項目に対応するアイコンを表示 */}
            <strong>{item.text}</strong>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

export default Profile;
