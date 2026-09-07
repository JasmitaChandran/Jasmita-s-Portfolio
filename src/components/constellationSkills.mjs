import { projects, stack } from "./terminal/profile.mjs";

// Skills also listed in the portfolio's Skills page, beyond the terminal stack.
export const skillGroups = [
  { title: "Backend Engineering", items: ["Java", "Spring Core & Spring MVC", "SpringBoot", "JUnit & Mockito", "REST APIs", "JSON", "WebSockets", "SAP CAP"] },
  { title: "Frontend Systems", items: ["HTML", "CSS", "React", "Angular", "SAP Fiori/UI5", "JavaScript", "TypeScript"] },
  { title: "Architecture and Tools", items: ["Microservices", "Eureka", "Kafka", "SAP BTP", "Docker", "Jenkins", "Maven", "Linux", "Swagger", "Postman", "Bruno", "SonarQube", "GitHub"] },
  { title: "Data Layer", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "OpenSearch", "CDS", "DBeaver"] },
];

const aliases = { "Fiori/UI5": "SAP Fiori/UI5", HANA: "SAP HANA", "Git/GitHub": "Git", NodeJS: "Node.js" };
export const constellationSkills = [...new Set([
  ...Object.values(stack).flat(),
  ...Object.values(projects).flatMap((project) => project.stack),
  ...skillGroups.flatMap((group) => group.items),
  "Node.js", "GitHub",
].map((skill) => aliases[skill] ?? skill))];

// Spread every skill over a sphere instead of crowding the original six slots.
export function skillPosition(index, count) {
  const height = 1 - 2 * (index + 0.5) / count;
  const radius = Math.sqrt(1 - height * height);
  const angle = index * Math.PI * (3 - Math.sqrt(5));
  return { x: Math.cos(angle) * radius * 3, y: height * 2.1, z: Math.sin(angle) * radius * 2.4, phase: angle };
}
