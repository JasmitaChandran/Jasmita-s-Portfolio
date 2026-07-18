import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
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
            <span className="section-kicker">
              <Sparkles size={16} />
              Full-Stack Developer
            </span>
            <h1>Jasmita Chandran</h1>
            <p className="hero-subtitle">
              Full-stack developer with strong expertise in Java and Spring Boot. Passionate about backend development while also experienced in frontend.
            </p>

            <div className="hero-actions">
              <Link className="button primary" to="/projects">
                <Rocket size={18} />
                View Projects
              </Link>
              <a className="button ghost" href="/resume.pdf" download>
                Resume
                <ArrowUpRight size={17} />
              </a>
            </div>

          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="portrait-shell">
              <img src="/photo.jpg" alt="Jasmita Chandran" />
              <div className="portrait-tag top">open to bold builds</div>
              <div className="portrait-tag bottom">ship. learn. lead.</div>
            </div>
            <div className="code-card" aria-label="Developer profile summary">
              <span className="code-dot red" />
              <span className="code-dot amber" />
              <span className="code-dot green" />
              <pre>{`public class Jasmita {
    public static void main(String[] args) {
        System.out.println("Hello, Recruiters!");
    }
}`}</pre>
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
