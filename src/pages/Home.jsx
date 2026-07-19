import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Database,
  Github,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Rocket,
  Sparkles,
  Trophy,
} from "lucide-react";

const DeveloperConstellation = React.lazy(() =>
  import("../components/DeveloperConstellation")
);

const highlights = [
  {
    icon: BriefcaseBusiness,
    label: "Current Role",
    value: "Associate Developer at SAP Labs India",
  },
  {
    icon: Trophy,
    label: "Impact",
    value: "Trainer, speaker, athlete, and builder",
  },
  {
    icon: MapPin,
    label: "Base",
    value: "New Delhi, India",
  },
];

const metrics = [
  { value: "16", label: "Inbound entities delivered" },
  { value: "30+", label: "Defects resolved across UI and backend" },
  { value: "10k+", label: "JUnit test lines added" },
];

const socialLinks = [
  {
    icon: Github,
    title: "GitHub",
    link: "https://github.com/JasmitaChandran",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/jasmita-chandran/",
  },
  {
    icon: Mail,
    title: "Email",
    link: "mailto:jasmitachandran24@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    link: "https://wa.me/+917303655829",
  },
  {
    icon: Instagram,
    title: "Instagram",
    link: "https://www.instagram.com/jasmitachandran/",
  },
];

const craftCards = [
  {
    icon: Code2,
    title: "Backend Systems",
    text: "Java, Spring Boot, validations, APIs, data contracts, and reliability work.",
  },
  {
    icon: Layers3,
    title: "Enterprise UI",
    text: "SAP Fiori/UI5, Angular, React, accessibility fixes, and polished interaction states.",
  },
  {
    icon: Database,
    title: "Data Products",
    text: "AI experiments, profiling tools, document chat, and healthcare-focused ML ideas.",
  },
];

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-lab">
        <Suspense fallback={null}>
          <DeveloperConstellation />
        </Suspense>
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-left-panel">
              <div className="hero-title-block">
                <span className="section-kicker">
                  <Sparkles size={16} />
                  Full-Stack Developer
                </span>
                <h1>
                  <span>Jasmita</span>
                  <span>Chandran</span>
                </h1>
                <p className="hero-stack-line">
                  Java / Spring Boot / Backend Systems
                </p>
              </div>

              <div className="hero-profile">
                <div className="portrait-shell">
                  <img src="/photo.jpg" alt="Jasmita Chandran" />
                </div>

                <div className="hero-text">
                  <span className="mini-title">About Me</span>
                  <p className="hero-subtitle">
                    Full-stack developer with strong expertise in Java and
                    Spring Boot. Passionate about backend development while also
                    experienced in frontend.
                  </p>

                  <div className="hero-actions">
                    <Link className="button primary" to="/projects">
                      <Rocket size={18} />
                      View Projects
                    </Link>
                  </div>
                </div>
              </div>

              <div className="hero-highlight-strip" aria-label="Experience highlights">
                <span>
                  <Code2 size={18} />
                  <strong>2+</strong>
                  Years Coding
                </span>
                <span>
                  <BarChart3 size={18} />
                  <strong>10+</strong>
                  Projects Built
                </span>
                <span>
                  <Layers3 size={18} />
                  <strong>5+</strong>
                  Technologies
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <span className="hero-float-badge badge-api">{`{ REST API }`}</span>
            <span className="hero-float-badge badge-code">
              <Code2 size={16} />
              Code
            </span>
            <span className="hero-float-badge badge-spring">Spring Boot</span>
            <div className="code-card" aria-label="Developer profile summary">
              <div className="terminal-bar">
                <div className="terminal-dots" aria-hidden="true">
                  <span className="code-dot red" />
                  <span className="code-dot amber" />
                  <span className="code-dot green" />
                </div>
                <span>portfolio.java</span>
                <strong>running</strong>
              </div>
              <div className="code-lines" aria-hidden="true">
                <p>
                  <span className="code-purple">public class</span>{" "}
                  <span className="code-green">Jasmita</span> {"{"}
                </p>
                <p>
                  <span className="code-purple">String</span>{" "}
                  <span className="code-amber">craft</span> ={" "}
                  <span className="code-green">"Java + Spring Boot"</span>;
                </p>
                <p>
                  <span className="code-purple">String</span>{" "}
                  <span className="code-amber">focus</span> ={" "}
                  <span className="code-green">"Backend systems"</span>;
                </p>
                <p className="code-gap">
                  <span className="code-purple">void</span>{" "}
                  <span className="code-amber">build</span>() {"{"}
                </p>
                <p>
                  ship(
                  <span className="code-green">"APIs"</span>,{" "}
                  <span className="code-green">"React UI"</span>,{" "}
                  <span className="code-green">"SAP apps"</span>);
                </p>
                <p>{"}"}</p>
                <p>{"}"}</p>
              </div>
              <div className="terminal-status">Building scalable solutions..._</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="home-snapshot page-shell">
        <div className="metrics-strip">
          {metrics.map((metric) => (
            <div className="metric-card" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="split-section">
          <div>
            <span className="section-kicker">Profile</span>
            <h2 className="section-title">Engineer with stage energy.</h2>
            <p className="section-copy">
              My work sits at the intersection of enterprise development,
              public speaking, mentoring, sports discipline, and creative
              execution. I care about systems that are stable under pressure and
              interfaces that feel effortless to use.
            </p>
          </div>

          <div className="highlight-grid">
            {highlights.map(({ icon: Icon, label, value }) => (
              <motion.article
                className="highlight-card"
                key={label}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
              >
                <Icon size={22} />
                <span>{label}</span>
                <strong>{value}</strong>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="craft-grid">
          {craftCards.map(({ icon: Icon, title, text }) => (
            <motion.article
              className="craft-card"
              key={title}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <Icon size={24} />
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </div>

        <div className="social-dock" aria-label="Social links">
          {socialLinks.map(({ icon: Icon, title, link }) => (
            <a
              href={link}
              key={title}
              title={title}
              aria-label={title}
              target={link.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            >
              <Icon size={21} />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
