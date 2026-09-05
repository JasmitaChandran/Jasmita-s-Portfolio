import React, { Suspense, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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

const terminalCommands = {
  help: [
    "Commands: about, skills, projects, impact, contact, clear",
    "Example: type skills and press Enter.",
  ],
  about: [
    "Jasmita Chandran",
    "Software Developer at SAP Labs India.",
    "Full-stack developer focused on Java, Spring Boot, backend systems, and thoughtful frontend experiences.",
  ],
  skills: [
    "Backend: Java, Spring Boot, REST APIs, Microservices",
    "Frontend: React, SAP UI5, Angular, accessible UI",
    "Quality: JUnit, debugging, validations, data contracts",
  ],
  projects: [
    "Built enterprise-grade API and UI work across SAP-focused systems.",
    "Explored AI-powered products, document chat, profiling tools, and healthcare ML ideas.",
  ],
  impact: [
    "16 inbound entities delivered.",
    "30+ defects resolved across UI and backend.",
    "10k+ JUnit test lines added.",
  ],
  contact: [
    "GitHub: github.com/JasmitaChandran",
    "LinkedIn: linkedin.com/in/jasmita-chandran",
    "Email: jasmitachandran24@gmail.com",
  ],
};

const initialTerminalHistory = [
  {
    type: "system",
    lines: [
      "JasmitaOS v1.0 initialized.",
      "Type help, about, skills, projects, impact, or contact.",
    ],
  },
];

const quickCommands = ["about", "skills", "projects", "impact", "contact"];

export default function Home() {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState(initialTerminalHistory);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  const runTerminalCommand = (rawCommand) => {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    if (command === "clear") {
      setTerminalHistory(initialTerminalHistory);
      setTerminalInput("");
      return;
    }

    const response = terminalCommands[command] || [
      `Command not found: ${rawCommand}`,
      "Run help to see available commands.",
    ];

    setTerminalHistory((currentHistory) => [
      ...currentHistory,
      { type: "command", lines: [`jasmita@portfolio ~ % ${rawCommand}`] },
      { type: command in terminalCommands ? "response" : "error", lines: response },
    ]);
    setTerminalInput("");
  };

  const handleTerminalSubmit = (event) => {
    event.preventDefault();
    runTerminalCommand(terminalInput);
  };

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
                <pre className="hero-stack-line"> Software Developer at SAP Labs India</pre>
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
                  <span className="hero-highlight-copy">
                    <small>Experience</small>
                    <strong>4+ Years</strong>
                  </span>
                </span>
                <span>
                  <BarChart3 size={18} />
                  <span className="hero-highlight-copy">
                    <small>Location</small>
                    <strong>New Delhi</strong>
                  </span>
                </span>
                <span>
                  <Layers3 size={18} />
                  <span className="hero-highlight-copy">
                    <small>Current Role</small>
                    <strong>Associate Developer</strong>
                  </span>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="home-terminal-section page-shell">
        <motion.div
          className="interactive-terminal"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.7 }}
        >
          <div className="terminal-topbar">
            <div className="terminal-dots" aria-hidden="true">
              <span className="terminal-dot red" />
              <span className="terminal-dot amber" />
              <span className="terminal-dot green" />
            </div>
            <span>jasmita@portfolio: ~/resume</span>
            <strong>interactive</strong>
          </div>

          <div className="terminal-screen" aria-live="polite">
            {terminalHistory.map((entry, entryIndex) => (
              <div className={`terminal-line ${entry.type}`} key={`${entry.type}-${entryIndex}`}>
                {entry.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          <form className="terminal-input-row" onSubmit={handleTerminalSubmit}>
            <span aria-hidden="true">jasmita@portfolio ~ %</span>
            <input
              aria-label="Terminal command"
              autoComplete="off"
              spellCheck="false"
              value={terminalInput}
              onChange={(event) => setTerminalInput(event.target.value)}
            />
            <button type="submit">Run</button>
          </form>

          <div className="terminal-command-row" aria-label="Quick terminal commands">
            {quickCommands.map((command) => (
              <button
                type="button"
                key={command}
                onClick={() => runTerminalCommand(command)}
              >
                {command}
              </button>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
