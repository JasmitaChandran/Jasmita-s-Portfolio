import React from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, School, University } from "lucide-react";

const education = [
  {
    icon: University,
    title: "M.Tech in Software Engineering",
    place: "BITS Pilani",
    meta: "2022 - 2026",
    detail: "4th Year, pursuing with GPA 8.0",
  },
  {
    icon: GraduationCap,
    title: "BCA - Bachelor of Computer Applications",
    place: "Vivekananda Institute Of Professional Studies, GGSIPU",
    meta: "Completed in 2022",
    detail: "Graduated with GPA 9.56",
  },
  {
    icon: School,
    title: "Senior Secondary Education",
    place: "St Michael's Sr. Sec. School, New Delhi",
    meta: "Completed in 2019",
    detail: "CBSE, 86%",
  },
];

export default function About() {
  return (
    <motion.section
      className="page-shell education-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className="page-heading">
        <span className="section-kicker">
          <BookOpen size={16} />
          Education path
        </span>
        <h1>Built on strong fundamentals.</h1>
        <p>
          A software engineering journey shaped by academic depth, consistent
          practice, and a bias toward building things that can stand up in the
          real world.
        </p>
      </div>

      <div className="education-layout">
        <motion.div
          className="education-intro"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <h2>Learning style</h2>
          <p>
            I like turning theory into working systems: learning a concept,
            testing it in code, documenting the edge cases, and then explaining
            it back to others.
          </p>
          <div className="mini-stat">
            <strong>8.0</strong>
            <span>Current M.Tech GPA</span>
          </div>
          <div className="mini-stat">
            <strong>9.56</strong>
            <span>BCA GPA</span>
          </div>
        </motion.div>

        <div className="timeline education-timeline">
          {education.map(({ icon: Icon, title, place, meta, detail }, index) => (
            <motion.article
              className="timeline-item"
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="timeline-icon">
                <Icon size={22} />
              </div>
              <div>
                <span className="timeline-meta">{meta}</span>
                <h2>{title}</h2>
                <h3>{place}</h3>
                <p>{detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
