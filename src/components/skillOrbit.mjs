import { skillGroups } from "./constellationSkills.mjs";

// The table owns the labels. Keep the two extra skills from the original orbit.
export const orbitSkills = [...new Set([
  ...skillGroups.flatMap(({ items }) => items), "NodeJS", "Git",
])];

export function orbitPosition(index, count) {
  const ring = index < 8 ? 0 : index < 20 ? 1 : 2;
  const start = [0, 8, 20][ring];
  const capacity = [8, 12, Math.max(1, count - 20)][ring];
  const length = Math.min(capacity, count - start);
  const angle = ((index - start) / length) * Math.PI * 2 + (ring === 1 ? Math.PI / 12 : 0);
  return {
    x: Math.cos(angle) * [175, 325, 480][ring],
    y: Math.sin(angle) * [145, 275, 410][ring],
  };
}

// Pin new original SVGs so their built-in brand colors cannot drift with a CDN update.
const devicon = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon@7330accdbc47e2dc0c19789a48533c4a3c50fe58/icons/${name}/${name}-original.svg`;

// Preserve the existing logos and reuse them for equivalent table labels.
export const orbitLogos = {
  HTML: devicon("html5"),
  CSS: devicon("css3"),
  "Spring Core & Spring MVC": devicon("spring"),
  "JUnit & Mockito": devicon("junit"),
  JSON: devicon("json"),
  Kafka: devicon("apachekafka"),
  Redis: devicon("redis"),
  SonarQube: devicon("sonarqube"),
  PostgreSQL: devicon("postgresql"),
  SQLite: devicon("sqlite"),
  Docker: devicon("docker"),
  DBeaver: devicon("dbeaver"),
  Jenkins: devicon("jenkins"),
  Maven: devicon("maven"),
  Linux: devicon("linux"),
  TypeScript: devicon("typescript"),
  MongoDB: devicon("mongodb"),
  GitHub: devicon("github"),
  Swagger: devicon("swagger"),
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  SpringBoot: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  "SAP Fiori/UI5": "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  "SAP CAP": "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  "SAP BTP": "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  NodeJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
};

// Simple Icons 13.0.0 brand metadata for icons not available in Devicon.
export const orbitIconColors = { Bruno: "#F4AA41", OpenSearch: "#005EB8" };

// A light backing keeps naturally dark marks visible without recoloring them.
export const orbitLogoBackplates = new Set(["Kafka", "GitHub", "JSON", "DBeaver"]);
