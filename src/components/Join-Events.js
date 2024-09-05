import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Join-Events.css';
import { FaHackerrank, FaCity } from 'react-icons/fa';  // アイコンを追加

const events = [
  { 
    date: '2024年 9月', 
    title: 'Sonyハッカソン', 
    icon: <FaHackerrank />,  // アイコンを追加
    description: 'Sonyハッカソンは、最新のテクノロジーとクリエイティブなアイデアを組み合わせたプロジェクトを開発するイベントです。エンターテイメントやイノベーションに関する革新的なソリューションを生み出すことを目指しています。',
    images: [
      'https://via.placeholder.com/300?text=Sony+1',
      'https://via.placeholder.com/300?text=Sony+2',
    ],
  },
  { 
    date: '2024年 10月', 
    title: 'Plateauハッカソン', 
    icon: <FaCity />,  // アイコンを追加
    description: 'Plateauハッカソンは、都市データを活用した新しいサービスやソリューションを開発することを目的としたイベントです。スマートシティや都市計画に関する革新的なプロジェクトを生み出します。',
    images: [
      'https://via.placeholder.com/300?text=Plateau+1',
      'https://via.placeholder.com/300?text=Plateau+2',
    ],
  },
];

export default function JoinEvents() {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const handleEventClick = (event) => {
    setExpandedEvent(expandedEvent === event ? null : event);
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
                  <img key={i} src={image} alt={`${event.title} ${i + 1}`} />
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
