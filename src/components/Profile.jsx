// React ライブラリをインポート
import React from 'react';
// CSS スタイルをインポート
import './Profile.css';
// ローカル画像をインポート
import profilePhoto from '../assets/image.png'; 
// React Iconsから必要なアイコンをインポート
import { 
  FaUniversity, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaUser, 
  FaBook, 
  FaMicroscope, 
  FaSmile, 
  FaUsers, 
  FaMedal, 
  FaRegTired, 
  FaGlobe 
} from 'react-icons/fa';
// framer-motion ライブラリをインポート（アニメーション用）
import { motion } from 'framer-motion';

// 各プロフィール項目のアニメーション設定
const itemVariants = {
  // 初期状態（非表示 + 左右交互にスライドアウト）
  hidden: (i) => ({ opacity: 0, x: i % 2 === 0 ? -50 : 50 }),
  // 表示状態（表示 + 元の位置にスライドイン）
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

// プロフィール情報と対応するアイコンをリストとして定義
const profileData = [
  { text: '氏名: 増田 晃大', icon: <FaUser /> }, // 氏名
  { text: '大学名: 公立諏訪東京理科大学', icon: <FaUniversity /> }, // 大学名
  { text: '学部/学科: 工学部/情報応用工学科', icon: <FaBook /> }, // 学部/学科
  { text: '研究室: Virtual Reality ＆ Data Science Lab', icon: <FaMicroscope /> }, // 研究室
  { text: '出身地: 群馬県', icon: <FaMapMarkerAlt /> }, // 出身地
  { text: '趣味: ドライブ', icon: <FaSmile /> }, // 趣味
  { text: 'サークル: バドミントン', icon: <FaUsers /> }, // サークル活動
  { text: '短期留学: カリフォルニア大学デービス校', icon: <FaGlobe /> }, // 留学経験
  { text: '強み: 主体性/チャレンジ精神', icon: <FaMedal /> }, // 強み
  { text: '弱み: せっかち', icon: <FaRegTired /> }, // 弱み
  { text: 'GitHub のアカウント: T122135masuda', icon: <FaGithub /> }, // GitHub アカウント
];

// Profile コンポーネントを定義
const Profile = () => (
  // プロフィールセクション全体のコンテナ
  <div className="profile-section">
    {/* プロフィール画像を表示 */}
    <img src={profilePhoto} alt="Your Name" className="profile-photo" />
    {/* プロフィールの説明部分 */}
    <div className="profile-description">
      <h2>マイプロフィール</h2> {/* 見出しを表示 */}

      {/* プロフィール詳細をアニメーションで表示 */}
      <motion.div 
        className="profile-details"
        initial="hidden" // 初期状態を非表示に設定
        animate="visible" // 表示状態にアニメーション
        transition={{ staggerChildren: 0.15 }} // 各子要素のアニメーションを0.15秒ずつ遅らせて実行
      >
        {/* 各プロフィール項目をリストとして表示 */}
        {profileData.map((item, i) => (
          <motion.div 
            className="profile-item" 
            key={i} 
            custom={i} // 左右交互のアニメーションを設定するためのインデックス
            variants={itemVariants} // アニメーションの種類を指定
          >
            {/* アイコン部分 */}
            <span className="profile-icon">{item.icon}</span> 
            {/* プロフィール項目のテキスト */}
            <strong>{item.text}</strong>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
);

// 他のファイルで使用するため、このコンポーネントをエクスポート
export default Profile;
