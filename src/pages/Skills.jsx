import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Boxes, Code2, Database, Gauge, Network } from "lucide-react";
import "./Skills.css";
import { skillGroups } from "../components/constellationSkills.mjs";
import { orbitSkills, orbitLogos, orbitPosition, orbitIconColors, orbitLogoBackplates } from "../components/skillOrbit.mjs";
import { SiBruno, SiOpensearch } from "react-icons/si";

const orbitIcons = {
  Bruno: SiBruno, OpenSearch: SiOpensearch, "REST APIs": Network,
  WebSockets: Network, Microservices: Boxes, Eureka: Network, CDS: Database,
};

const groupIcons = [Code2, Gauge, Network, Database];
const groups = skillGroups.map((group, index) => ({ ...group, icon: groupIcons[index] }));

export default function Skills() {
  const reducedMotion = useReducedMotion();
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

      <section className={`skill-lab${orbitSkills.length > 40 ? " skill-lab-grid" : ""}`} aria-label="Skill orbit">
        <div className="skill-orbit-ring" aria-hidden="true" />
        <div className="orbit-core">
          <strong>Full Stack</strong>
          <span>Java + UI + SAP</span>
          <small>{orbitSkills.length} skills</small>
        </div>
        <ul className="skill-orbit-list" role="list">
          {orbitSkills.map((name, index) => {
            const { x, y } = orbitPosition(index, orbitSkills.length);
            const Icon = orbitIcons[name] ?? Code2;
            return (
              <motion.li
                className="skill-orbit-item"
                key={name}
                style={{
                  "--x": `${50 + x / 1180 * 100}%`,
                  "--y": `${50 + y / 940 * 100}%`,
                }}
                initial={reducedMotion ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: reducedMotion ? 0 : 0.3, delay: reducedMotion ? 0 : index % 8 * 0.025 }}
              >
                <span className={`skill-logo${orbitLogoBackplates.has(name) ? " skill-logo-light" : ""}`}>
                  {orbitLogos[name]
                    ? <img src={orbitLogos[name]} alt="" />
                    : <Icon aria-hidden="true" style={{ color: orbitIconColors[name] ?? "var(--muted)" }} />}
                </span>
                <span>{name}</span>
              </motion.li>
            );
          })}
        </ul>
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
