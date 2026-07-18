import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Microscope, Sparkles } from "lucide-react";

const PROJECTS = [
  {
    title: "Mammogram Malignancy Detector",
    category: "Healthcare AI",
    desc: "Hybrid CNN and YOLOv8 ensemble for breast cancer detection with ROI preprocessing and sliding-window inference.",
    ss: "/mamo.png",
    tech: ["TensorFlow", "Keras", "OpenCV", "YOLOv8"],
    live: "",
    code: "https://github.com/kunjdesai/mammo-detector",
  },
  {
    title: "Mental Health Analyzer",
    category: "NLP",
    desc: "A text analysis system that detects stress, anxiety, and depression signals with sentiment and transformer models.",
    ss: "/mentalhealth.jpg",
    tech: ["Python", "Transformers", "NLTK", "scikit-learn"],
    live: "https://mental-health-analyzer.streamlit.app/",
    code: "https://github.com/kunj2803/Mental-Health-Analyzer",
  },
  {
    title: "Indian Sign Language Interpreter",
    category: "Computer Vision",
    desc: "Real-time gesture recognition and sign-to-text interpretation powered by Mediapipe and TensorFlow.",
    ss: "/ISL.png",
    tech: ["Mediapipe", "TensorFlow", "React", "Flask"],
    live: "",
    code: "https://github.com/kunjdesai/ISL-Interpreter",
  },
  {
    title: "Portfolio Website",
    category: "Creative Frontend",
    desc: "A responsive portfolio experience with React, smooth motion, rich visuals, and interactive content sections.",
    ss: "/portfolio.jpg",
    tech: ["React", "Framer Motion", "CSS"],
    live: "",
    code: "https://github.com/kunj2803/Kunj-Portfolio",
  },
  {
    title: "DocuChat - Gemini AI Chatbot",
    category: "AI Assistant",
    desc: "Document interaction app that uses Gemini API to understand uploaded PDFs and answer natural language questions.",
    ss: "/Docuchat.png",
    tech: ["Gemini API", "LangChain", "Python", "Streamlit"],
    live: "https://docuchat-chatbot.streamlit.app/",
    code: "https://github.com/kunj2803/Docuchat-Chatbot",
  },
  {
    title: "ProfileX - Data Profiler",
    category: "Data Tooling",
    desc: "Smart CSV profiling with feature summaries, missing-value handling, and visualization workflows.",
    ss: "/ProfileX.png",
    tech: ["Streamlit", "Pandas", "Plotly"],
    live: "https://profilex.streamlit.app/",
    code: "https://github.com/kunjdesai/ProfileX",
  },
];

export default function Projects() {
  return (
    <motion.section
      className="page-shell projects-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className="page-heading">
        <span className="section-kicker">
          <Microscope size={16} />
          Featured builds
        </span>
        <h1>Projects with a pulse.</h1>
        <p>
          A curated set of AI experiments, developer tools, and polished web
          experiences built around practical use cases.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <motion.article
            key={project.title}
            className={`project-card ${index === 0 ? "featured" : ""}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -8 }}
          >
            <div className="project-image">
              <img src={project.ss} alt={`${project.title} preview`} />
              <span>{project.category}</span>
            </div>

            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>

              <div className="chip-row">
                {project.tech.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.code} target="_blank" rel="noreferrer">
                  <Github size={17} />
                  Code
                </a>
                {project.live && (
                  <a
                    className="live-link"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Sparkles size={17} />
                    Live
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
