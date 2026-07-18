import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { label: "Home", to: "/" },
  { label: "Education", to: "/about" },
  { label: "Work", to: "/certificates" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Achievements", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <NavLink className="brand" to="/" aria-label="Jasmita Chandran home">
        <motion.span
          className="brand-mark"
          initial={{ rotate: -10, scale: 0.9 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
        >
          JC
        </motion.span>
        <span className="brand-copy">
          <strong>Jasmita Chandran</strong>
          <small>Full Stack Developer</small>
        </span>
      </NavLink>

      <div className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `nav-link ${isActive ? "is-active" : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
