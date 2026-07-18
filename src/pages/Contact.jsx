import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";

const quickLinks = [
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

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isEmail = emailPattern.test(form.contact);
    if (!isEmail && Number.isNaN(Number(form.contact))) {
      setStatus("Please enter a valid email or phone number.");
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          contact_info: form.contact,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully.");
          setForm({ name: "", contact: "", subject: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send. Try again later.");
        }
      );
  };

  return (
    <motion.section
      className="page-shell contact-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className="page-heading">
        <span className="section-kicker">
          <Send size={16} />
          Contact
        </span>
        <h1>Let's build something worth remembering.</h1>
        <p>
          Reach out for collaboration, project ideas, speaking opportunities, or
          a good full-stack problem.
        </p>
      </div>

      <div className="contact-layout">
        <aside className="contact-panel">
          <h2>Signal channels</h2>
          <p>
            Pick the fastest route or send a detailed note. I usually respond
            best when the message includes context, goal, and timeline.
          </p>
          <div className="contact-socials">
            {quickLinks.map(({ icon: Icon, title, link }) => (
              <a
                key={title}
                href={link}
                title={title}
                aria-label={title}
                target={link.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </aside>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
        >
          <label>
            Your Name
            <input
              type="text"
              name="name"
              placeholder="Jasmita's collaborator"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email or Phone
            <input
              type="text"
              name="contact"
              placeholder="name@example.com"
              value={form.contact}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Subject
            <input
              type="text"
              name="subject"
              placeholder="Project idea, role, or collaboration"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              placeholder="Tell me what we are building..."
              value={form.message}
              onChange={handleChange}
              required
              rows="6"
            />
          </label>
          <button className="button primary" type="submit">
            <Send size={18} />
            Send Message
          </button>
          {status && <p className="form-status">{status}</p>}
        </motion.form>
      </div>
    </motion.section>
  );
}
