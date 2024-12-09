import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './Join-Events.css';
import { FaHackerrank } from 'react-icons/fa';

import sonyImage1 from '../assets/Join-Events/sony1.png';
import sonyImage2 from '../assets/Join-Events/sony2.png';
import sonyImage3 from '../assets/Join-Events/sony3.png';
import plateauImage1 from '../assets/Join-Events/plateau1.png';
import plateauImage2 from '../assets/Join-Events/plateau2.png';

const events = [
  { 
    date: '2024年 9月', 
    title: 'Sony ~Sensing Solution ハッカソン', 
    icon: <FaHackerrank />,
    description: 'SPRESENSEを利用し、センサーから得られるデータ並びにAI等の技術を活用したシステムインテグレーションにより社会課題を解決したり、私たちの未来をもっと豊かにするようなエンタテイメントを創出するハッカソンです。',
    links: [
      { label: '公式サイトのリンク', url: 'https://sensing-solution-hackathon.sonyged.com/#year-2024' }
    ],
    images: [sonyImage1, sonyImage2, sonyImage3],
  },
  { 
    date: '2024年 10月', 
    title: 'Plateauハッカソン', 
    icon: <FaHackerrank />,
    description: '国土交通省が主導する日本全国デジタルツイン化プロジェクトの Project PLATEAU と、オープンデータを活用することによって地域課題を解決できないかチャレンジするハッカソンです。',
    links: [
      { label: '公式サイトのリンク', url: 'https://suwax.jp/events/hackathon202409/' },
      { label: '作品成果物のリンク', url: 'https://protopedia.net/prototype/6121' },
      { label: '活動風景(Youtube)', url: 'https://youtu.be/ORyNI7KXPqs?si=cR87olrWbcXqd28a' }
    ],
    images: [plateauImage1, plateauImage2],
  },
];

export default function JoinEvents() {
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [isZooming, setIsZooming] = useState(false);

  const toggleEventExpansion = (event) => {
    if (!isZooming) setExpandedEvent(expandedEvent === event ? null : event);
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
          onClick={() => toggleEventExpansion(event)}
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
              onClick={(e) => e.stopPropagation()}
            >
              <p>{event.description}</p>
              <div className="join-event-links">
                {event.links.map((link, i) => (
                  <div key={i} className="event-link">
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="official-site-link"
                    >
                      {link.label}
                    </a>
                  </div>
                ))}
              </div>
              <div className="join-event-images">
                {event.images.map((image, i) => (
                  <Zoom key={i} onZoomChange={setIsZooming}>
                    <img 
                      src={image} 
                      alt={`${event.title} ${i + 1}`} 
                      style={{ cursor: 'zoom-in' }}
                      onClick={(e) => e.stopPropagation()}
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
