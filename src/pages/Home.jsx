import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import InteractiveTerminal from "../components/terminal/InteractiveTerminal";
import { metrics, profile } from "../components/terminal/profile.mjs";
import { motion } from "framer-motion";
import {
  BarChart3,
  Code2,
  Layers3,
  Rocket,
  Sparkles,
} from "lucide-react";

const DeveloperConstellation = React.lazy(() =>
  import("../components/DeveloperConstellation")
);

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
                  {profile.role}
                </span>
                <h1>
                  <span>Jasmita</span>
                  <span>Chandran</span>
                </h1>
                <pre className="hero-stack-line">{profile.title} @ {profile.employer}</pre>
              </div>

              <div className="hero-profile">
                <div className="portrait-shell">
                  <img src="/photo.jpg" alt="Jasmita Chandran" />
                </div>

                <div className="hero-text">
                  <span className="mini-title">About Me</span>
                  <p className="hero-subtitle">
                    I’m a Full Stack Java Developer specializing in Java, Spring Boot, Microservices, REST APIs, and distributed systems, with hands-on frontend experience in Angular, React, and SAP Fiori/UI5. At SAP Labs, I work on enterprise-scale SAP Ariba applications across backend development, integrations, testing, and production support using technologies including SAP CAP, BTP, HANA, Kafka, Redis, and Docker. I enjoy building scalable systems, debugging complex production problems, and creating full-stack products from idea to deployment.
                  </p>

                  <div className="hero-actions">
                    <Link className="button primary" to="/projects">
                      <Rocket size={18} />
                      View Projects
                    </Link>
                     <Link className="button primary" to="/resume">
                      <Rocket size={18} />
                      View Resume
                    </Link>
                  </div>
                </div>
              </div>

              <div className="hero-highlight-strip" aria-label="Experience highlights">
                <span>
                  <BarChart3 size={18} />
                  <span className="hero-highlight-copy">
                    <small>Experience</small>
                    <strong>{profile.experience}</strong>
                  </span>
                </span>
                <span>
                  <Code2 size={18} />
                  <span className="hero-highlight-copy">
                    <small>Core Stack</small>
                    <strong>Java • Spring Boot</strong>
                    <span className="hero-stat-detail">Microservices</span>
                  </span>
                </span>
                <span>
                  <Layers3 size={18} />
                  <span className="hero-highlight-copy">
                    <small>Enterprise Impact</small>
                    <strong>{metrics.entities} Entities</strong>
                    <span className="hero-stat-detail">SAP Ariba / MDCS</span>
                  </span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <InteractiveTerminal />
    </main>
  );
}
