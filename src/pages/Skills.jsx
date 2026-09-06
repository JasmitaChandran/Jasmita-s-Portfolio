import React from "react";
import { motion } from "framer-motion";
import { Boxes, Code2, Database, Gauge, Network } from "lucide-react";
import "./Skills.css";
import { skillGroups } from "../components/constellationSkills.mjs";

const SKILLS = [
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "SAP UI5", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "SAP CAP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "SAP BTP", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "NodeJS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
];

const groupIcons = [Code2, Gauge, Network, Database];
const groups = skillGroups.map((group, index) => ({ ...group, icon: groupIcons[index] }));

export default function Skills() {
  return (
    <motion.section
      className="skills-container"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className="page-heading">
        <span className="section-kicker">
          <Boxes size={16} />
          Technical toolkit
        </span>
        <h1>Stacked for practical shipping.</h1>
        <p>
          A hands-on mix of backend engineering, enterprise frontend work,
          testing, integration, and data-heavy tooling.
        </p>
      </div>

      <section className="skill-lab" aria-label="Skill orbit">
        <div className="orbit-core">
          <strong>Full Stack</strong>
          <span>Java + UI + SAP</span>
        </div>
        {SKILLS.map((skill, index) => (
          <motion.div
            className="skill-orbit-item"
            key={skill.name}
            style={{
              "--angle": `${index * 30}deg`,
              "--radius": index % 2 === 0 ? "220px" : "150px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <img src={skill.logo} alt="" />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </section>

      <div className="skills-table">
        {groups.map(({ icon: Icon, title, items }, index) => (
          <motion.article
            className="skill-box"
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <Icon size={22} />
            <h2>{title}</h2>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
