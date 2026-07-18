import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Building2, CheckCircle2, Code2 } from "lucide-react";

const experiences = [
  {
    title: "SAP Ariba Procurement",
    role: "Associate Developer",
    period: "Jul 2024 - Present",
    bullets: [
      "Developed 16 inbound entities in MDCS with JSON schema validation, transformation mapping, CDS schemas, and service integration.",
      "Implemented file upload for 7 entities with Excel-to-JSON parsing and automated data publishing into SAP MDCS.",
      "Migrated Angular from v11 to v18.2 and improved SAP Fiori/UI5 search, filters, layout persistence, and upload flows.",
      "Resolved 20+ UI defects and 10 backend defects while increasing JUnit coverage by 5% with 10,000+ lines of tests.",
    ],
  },
  {
    title: "Success Factors Next Gen Payroll",
    role: "Scholar@SAP",
    period: "Jan 2024 - Jun 2024",
    bullets: [
      "Worked across Java, Spring Boot, Freestyle Fiori, and Eureka-based microservices.",
      "Solved 10+ UI accessibility defects.",
      "Built verification logic in Java and tested it through JUnit and Mockito.",
    ],
  },
  {
    title: "UX Engineering - SAP Fiori V2",
    role: "Scholar@SAP",
    period: "Jun 2023 - Dec 2023",
    bullets: [
      "Handled 40+ internal and customer incidents through BCP, IMS, and ServiceNow.",
      "Built working understanding of Fiori Elements, XML templating, message handling, side effects, app state handling, MVC protocol, and annotations.",
      "Collaborated with customers across Germany, USA, and China.",
    ],
  },
  {
    title: "Digital Vehicle Operations",
    role: "Scholar@SAP",
    period: "Sept 2022 - May 2023",
    bullets: [
      "Implemented and deployed Bookshop and Quotation applications on HANA Trial with CAP Java and CRUD flows.",
      "Designed Fiori annotation-driven object pages and deployed them with SQLite.",
      "Explored audit logging and added Java validations tested with JUnit and Mockito.",
    ],
  },
  {
    title: "Shriram Pistons & Rings Ltd",
    role: "Business Applications in Java Intern",
    period: "Jul 2021 - Sep 2021",
    bullets: [
      "Developed backend functionality with Java and JDBC.",
      "Designed and implemented database schemas for reliable data management.",
    ],
  },
  {
    title: "QA-Solvers",
    role: "Subject Matter Expert Intern",
    period: "Jul 2020 - Oct 2020",
    bullets: [
      "Created 90+ doubt-solving videos on web development, Python, Java, and MySQL for Bartleby.",
      "Created 10+ doubt-solving videos for class 9 and 10 mathematics for Vedantu.",
    ],
  },
];

export default function Certificates() {
  return (
    <motion.section
      className="page-shell work-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
    >
      <div className="page-heading">
        <span className="section-kicker">
          <BriefcaseBusiness size={16} />
          Work experience
        </span>
        <h1>Enterprise work, practical impact.</h1>
        <p>
          From SAP product teams to early internships, each role sharpened a
          different part of the stack: backend services, Fiori interfaces,
          testing, customer incidents, and developer enablement.
        </p>
      </div>

      <div className="work-layout">
        <aside className="work-console">
          <Building2 size={26} />
          <h2>SAP Labs India</h2>
          <p>
            Current focus: procurement master data, validations, upload flows,
            Angular modernization, Fiori polish, and reliability.
          </p>
          <div className="console-line">
            <Code2 size={16} />
            <span>Java + Spring Boot + UI5 + Angular</span>
          </div>
        </aside>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <motion.article
              className="timeline-item work-item"
              key={`${experience.title}-${experience.period}`}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <span className="timeline-meta">{experience.period}</span>
              <h2>{experience.title}</h2>
              <h3>{experience.role}</h3>
              <ul>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>
                    <CheckCircle2 size={16} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
