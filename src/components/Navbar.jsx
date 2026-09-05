import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Braces,
  FileText,
  FolderCode,
  GraduationCap,
  Home,
  Mail,
  Trophy,
} from "lucide-react";

const links = [
  { label: "Home", to: "/", icon: Home },
  { label: "Education", to: "/about", icon: GraduationCap },
  { label: "Work", to: "/certificates", icon: BriefcaseBusiness },
  { label: "Skills", to: "/skills", icon: Braces },
  { label: "Projects", to: "/projects", icon: FolderCode },
  { label: "Achievements", to: "/gallery", icon: Trophy },
  { label: "Resume", to: "/resume", icon: FileText },
  { label: "Contact", to: "/contact", icon: Mail },
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
        {links.map(({ icon: Icon, ...link }) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `nav-link ${isActive ? "is-active" : ""}`
            }
          >
            <Icon size={16} strokeWidth={2.3} aria-hidden="true" />
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
