import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Gallery.css";

const IMAGES = {
  achievements: [
   
    {
      id: 2,
      caption: "Hosted Women’s Day 2023.",
      photos: ["/gallery/B1.jpeg",
        "/gallery/B2.jpeg"
      ],
    },
    {
      id: 3,
      caption: "Hosted a panel discussion at Placement Officer’s Meet 2023.",
      photos: ["/gallery/C1.jpeg",
        "/gallery/C2.jpeg"
      ],
    },
    {
      id: 4,
      caption: "Secured 1st position in Relay Race and Basketball (2022) In SAP Scholympics.",
      photos: ["/gallery/D1.jpeg",
        "/gallery/D2.jpeg",
        "/gallery/D3.jpeg",
        "/gallery/D4.jpeg",
      ],
    },
    {
      id: 5,
      caption: "Volunteered for Innvent for Customer Event 2024.",
      photos: ["/gallery/E1.jpeg"],
    },
    {
      id: 6,
      caption: "Delivered training to 50+ freshers through an intensive 5-day workshop (9 AM–4 PM) on Java and Spring Boot. Conducted this training twice: for the 2024 batch (19th–23rd Aug 2024) and the 2025 batch (25th–29th Aug 2025).",
      caption: "Volunteered at SAP Inside Track (SIT) 2023 & 2025.",
      photos: ["/gallery/F1.jpeg",
        "/gallery/F2.jpeg",
        "/gallery/F3.jpeg",
      ],
    },
    {
      id: 1,
      caption: "Delivered training to 50+ freshers through an intensive 5-day workshop (9 AM–4 PM) on Java and Spring Boot. Conducted this training twice: for the 2024 batch (19th–23rd Aug 2024) and the 2025 batch (25th–29th Aug 2025).",
      photos: [
        "/gallery/A1.jpeg",
        "/gallery/A2.jpeg",
        "/gallery/A3.jpeg",
        "/gallery/A4.jpeg",
        "/gallery/A5.jpeg",
        "/gallery/A6.jpeg",
      ],
    },
  ],
};

// ✨ Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ✨ Tab Switching Animations
const tabContentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.4 } },
};

export default function Gallery() {
  const [zoom, setZoom] = useState({ img: null, post: null, index: 0 });

  const openZoom = (post, index) =>
    setZoom({ img: post.photos[index], post, index });

  const closeZoom = () => setZoom({ img: null, post: null, index: 0 });

  const nextImage = () => {
    if (!zoom.post) return;
    const nextIndex = (zoom.index + 1) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    if (!zoom.post) return;
    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[prevIndex], index: prevIndex });
  };

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* 🌟 Title */}
      <motion.h2 className="gallery-title" variants={childVariants}>
        Roles and Achievements
      </motion.h2>

      {/* 🖼️ Posts */}
     <motion.div
        className="post-feed"
        variants={tabContentVariants}
        initial="hidden"
        animate="visible"
      >
        {IMAGES.achievements.map((post) => (
          <motion.div
            key={post.id}
            className="post-card"
            variants={childVariants}
            whileHover={{ y: -4 }}
          >
            <p className="caption">{post.caption}</p>
            <div
              className={`photo-grid ${
                post.photos.length > 1 ? "multi" : "single"
              }`}
            >
              {post.photos.map((src, i) => (
                <motion.div
                  key={i}
                  className="photo-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  onClick={() => openZoom(post, i)}
                >
                  <img src={src} alt="gallery" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔍 Zoom Overlay */}
      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              key={zoom.img}
              src={zoom.img}
              alt="zoom"
              className="zoom-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {zoom.post?.photos.length > 1 && (
              <>
                <button className="nav-btn left" onClick={prevImage}>
                  <ChevronLeft size={32} />
                </button>
                <button className="nav-btn right" onClick={nextImage}>
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            <button className="close-btn" onClick={closeZoom}>
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
