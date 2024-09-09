import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './Join-Events.css';
import { FaHackerrank, FaCity } from 'react-icons/fa';

// 相対パスを使用して画像をインポート
import sonyImage1 from '../assets/Join-Events/sony1.png';
import sonyImage2 from '../assets/Join-Events/sony2.png';
import plateauImage1 from '../assets/Join-Events/plateau1.png';
import plateauImage2 from '../assets/Join-Events/plateau2.png';

const events = [
  { 
    date: '2024年 9月', 
    title: 'Sony ~Sensing Solution ハッカソン~', 
    icon: <FaHackerrank />,
    description: 'Sonyハッカソンは、最新のテクノロジーとクリエイティブなアイデアを組み合わせたプロジェクトを開発するイベントです。エンターテイメントやイノベーションに関する革新的なソリューションを生み出すことを目指しています。',
    images: [
      sonyImage1,
      sonyImage2,
    ],
  },
  { 
    date: '2024年 10月', 
    title: 'Plateauハッカソン', 
    icon: <FaCity />,
    description: 'Plateauハッカソンは、都市データを活用した新しいサービスやソリューションを開発することを目的としたイベントです。スマートシティや都市計画に関する革新的なプロジェクトを生み出します。',
    images: [
      plateauImage1,
      plateauImage2,
    ],
  },
];

export default function JoinEvents() {
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [isZooming, setIsZooming] = useState(false); // ズーム中かどうかの状態

  const handleEventClick = (event) => {
    if (isZooming) return; // ズーム中の場合はクリックイベントを無視する
    setExpandedEvent(expandedEvent === event ? null : event);
  };

  const handleImageClick = (e) => {
    e.stopPropagation(); // クリックイベントの伝搬を停止
  };

  const handleZoomChange = (shouldZoom) => {
    setIsZooming(shouldZoom); // ズーム中かどうかの状態を更新
  };

  return (
    <div className="join-events-container">
      {events.map((event, index) => (
        <motion.div
          key={index}
          className="join-event-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          onClick={() => handleEventClick(event)}
        >
          <div className="join-event-header">
            <div className="join-event-title">
              {event.icon} {event.title}
            </div>
            <div className="join-event-date">{event.date}</div>
          </div>
          {expandedEvent === event && (
            <motion.div
              className="join-event-details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p>{event.description}</p>
              <div className="join-event-images">
                {event.images.map((image, i) => (
                  <Zoom key={i} onZoomChange={handleZoomChange}>
                    <img 
                      src={image} 
                      alt={`${event.title} ${i + 1}`} 
                      onClick={handleImageClick} 
                      style={{ cursor: 'zoom-in' }} // ズームインカーソルを表示
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
}
