import React from "react";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <motion.section
      className="page-shell resume-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className="page-heading">
        <span className="section-kicker">
          <FileText size={16} />
          Resume
        </span>
        <h1>The concise version.</h1>
        <p>
          A quick view of experience, education, projects, skills, and
          professional highlights.
        </p>
      </div>

      <div className="resume-actions">
        <a className="button primary" href="/resume.pdf" download>
          <Download size={18} />
          Download Resume
        </a>
      </div>

      <div className="resume-frame">
        <iframe src="/resume.pdf" title="Jasmita Chandran Resume" />
      </div>
    </motion.section>
  );
}
