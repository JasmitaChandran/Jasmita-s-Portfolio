import React, { useState } from "react";
import { metrics } from "../components/terminal/profile.mjs";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import "./Gallery.css";

const ACHIEVEMENTS = [
  {
    id: 1,
    label: "Leadership",
    caption: `Delivered Java and Spring Boot training to ${metrics.trainees} freshers through intensive 5-day workshops for the 2024 and 2025 batches.`,
    photos: [
      "/gallery/A1.jpeg",
      "/gallery/A2.jpeg",
      "/gallery/A3.jpeg",
      "/gallery/A4.jpeg",
      "/gallery/A5.jpeg",
      "/gallery/A6.jpeg",
    ],
  },
  {
    id: 2,
    label: "Hosting",
    caption: "Hosted Women's Day 2023.",
    photos: ["/gallery/B1.jpeg", "/gallery/B2.jpeg"],
  },
  {
    id: 3,
    label: "Stage",
    caption: "Hosted a panel discussion at Placement Officer's Meet 2023.",
    photos: ["/gallery/C1.jpeg", "/gallery/C2.jpeg"],
  },
  {
    id: 4,
    label: "Sports",
    caption: "Secured 1st position in relay race and basketball at SAP Scholympics 2022.",
    photos: [
      "/gallery/D1.jpeg",
      "/gallery/D2.jpeg",
      "/gallery/D3.jpeg",
      "/gallery/D4.jpeg",
    ],
  },
  {
    id: 5,
    label: "Volunteer",
    caption: "Volunteered for Innvent for Customer Event 2024.",
    photos: ["/gallery/E1.jpeg"],
  },
  {
    id: 6,
    label: "Community",
    caption: "Volunteered at SAP Inside Track 2023 and 2025.",
    photos: ["/gallery/F1.jpeg", "/gallery/F2.jpeg", "/gallery/F3.jpeg"],
  },
];

export default function Gallery() {
  const [zoom, setZoom] = useState({ post: null, index: 0 });
  const activeImage = zoom.post?.photos[zoom.index];

  const openZoom = (post, index) => setZoom({ post, index });
  const closeZoom = () => setZoom({ post: null, index: 0 });

  const nextImage = () => {
    if (!zoom.post) return;
    setZoom({
      ...zoom,
      index: (zoom.index + 1) % zoom.post.photos.length,
    });
  };

  const prevImage = () => {
    if (!zoom.post) return;
    setZoom({
      ...zoom,
      index: (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length,
    });
  };

  return (
    <motion.section
      className="gallery-container"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className="page-heading">
        <span className="section-kicker">
          <Award size={16} />
          Roles and achievements
        </span>
        <h1>Moments that show the range.</h1>
        <p>
          Speaking, volunteering, training, sports, and community moments from
          the professional journey around the code.
        </p>
      </div>

      <div className="post-feed">
        {ACHIEVEMENTS.map((post, index) => (
          <motion.article
            className="post-card"
            key={post.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -8 }}
          >
            <div className="post-card-head">
              <span>{post.label}</span>
              <small>
                <Images size={14} />
                {post.photos.length}
              </small>
            </div>
            <p className="caption">{post.caption}</p>
            <div
              className={`photo-grid ${
                post.photos.length > 1 ? "multi" : "single"
              }`}
            >
              {post.photos.slice(0, 4).map((src, photoIndex) => (
                <button
                  key={src}
                  className="photo-item"
                  onClick={() => openZoom(post, photoIndex)}
                  aria-label={`Open ${post.label} photo ${photoIndex + 1}`}
                >
                  <img src={src} alt={`${post.label} ${photoIndex + 1}`} />
                  {photoIndex === 3 && post.photos.length > 4 && (
                    <span>+{post.photos.length - 4}</span>
                  )}
                </button>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button className="close-btn" onClick={closeZoom} aria-label="Close preview">
              <X size={26} />
            </button>

            {zoom.post?.photos.length > 1 && (
              <>
                <button className="nav-btn left" onClick={prevImage} aria-label="Previous image">
                  <ChevronLeft size={30} />
                </button>
                <button className="nav-btn right" onClick={nextImage} aria-label="Next image">
                  <ChevronRight size={30} />
                </button>
              </>
            )}

            <motion.figure
              className="zoom-frame"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
            >
              <img src={activeImage} alt={zoom.post.caption} />
              <figcaption>
                <strong>{zoom.post.label}</strong>
                <span>
                  {zoom.index + 1} / {zoom.post.photos.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
