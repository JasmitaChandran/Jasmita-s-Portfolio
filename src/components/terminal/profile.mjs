// Portfolio facts and links live here so terminal outputs stay consistent.
// Project URLs must be supplied by the owner; do not guess repository names.
export const profile = {
  name: "Jasmita Chandran",
  role: "Full Stack Developer",
  employer: "SAP Labs India",
  title: "Associate Developer",
  experience: "4+ Years",
  resume: "/resume",
  contact: [
    { label: "Email", text: "jasmitachandran24@gmail.com", href: "mailto:jasmitachandran24@gmail.com" },
    { label: "LinkedIn", text: "linkedin.com/in/jasmita-chandran", href: "https://www.linkedin.com/in/jasmita-chandran/" },
    { label: "GitHub", text: "github.com/JasmitaChandran", href: "https://github.com/JasmitaChandran" },
  ],
};

export const metrics = {
  entities: "50+", metadata: "40+", uploads: "30+", incidents: "40+",
  testLines: "10K+", coverage: "5%", trainees: "120+",
};
export const impact = [
  [metrics.entities, "Inbound Master Data Entities"],
  [metrics.metadata, "Dynamic Metadata Implementations"],
  [metrics.uploads, "File Upload Entity Workflows"],
  [metrics.incidents, "Customer & Internal Incidents Investigated"],
  [metrics.testLines, "Lines of JUnit Test Code"],
  [metrics.coverage, "Unit Test Coverage Improvement"],
  [metrics.trainees, "Freshers Trained on Java & Spring Boot"],
];
export const stack = {
  Backend: ["Java", "Spring Boot", "Spring MVC", "Microservices", "REST APIs"],
  "Distributed systems": ["Kafka", "Redis", "OpenSearch", "WebSockets"],
  Frontend: ["React", "Angular", "SAP Fiori/UI5", "JavaScript", "TypeScript"],
  Databases: ["PostgreSQL", "MySQL", "SAP HANA", "SQLite"],
  SAP: ["SAP CAP", "SAP BTP", "SAP Fiori/UI5", "SAP HANA"],
  "DevOps & tools": ["Docker", "Jenkins", "Git/GitHub", "Maven", "Linux", "Postman", "Bruno", "Swagger"],
};
export const contributions = {
  Backend: ["Java / Spring Boot microservices", `${metrics.entities} inbound master-data entities`, "JSON schema validations · MDI → MDNI → ODM transformations", "CDS models · business validations", `${metrics.uploads} file-upload workflows · ${metrics.metadata} dynamic metadata implementations`],
  Frontend: ["SAP Fiori/UI5 · search and filtering · layout persistence", "File uploads · dynamic instruction sheets", "Accessibility fixes · Fiori Elements / annotations"],
  "Production & customer support": [`${metrics.incidents} internal/customer incidents · ServiceNow / BCP / IMS`, "Kibana logs · request/response tracing · root-cause analysis", "Customer troubleshooting across Germany, USA, and China"],
  Testing: ["JUnit · Mockito", `${metrics.testLines} lines of tests · ${metrics.coverage} increase in test coverage`],
};
export const sapSummary = "Worked on SAP’s multi-tenant Master Data platform for Ariba Procurement, spanning SAP Fiori/UI5, MDA Portal Backend, Java/Spring Boot services, SAP CAP and CAP-MDCS/HANA, integrations with S/4HANA and MDI/OneMDS, and publish/search/metadata APIs.";
export const sapWork = [
  `${metrics.entities} inbound entities`, `${metrics.uploads} file-upload workflows`,
  `${metrics.metadata} dynamic metadata implementations`, "Java / Spring Boot / CAP development",
  "Fiori/UI5 frontend enhancements", "JUnit/Mockito testing · production incident investigation",
];
export const projects = {
  logflow: {
    name: "LogFlow", subtitle: "Distributed Log & Incident Analysis Platform",
    description: "Microservices-based platform for log ingestion, normalization, correlation, incident detection, and failure-origin analysis.",
    stack: ["Java", "Spring Boot", "Microservices", "Kafka", "PostgreSQL", "OpenSearch", "Valkey", "Docker"],
    live: "https://log-flow.vercel.app/", github: "https://github.com/JasmitaChandran/StockMetrics",
  },
  sap: {
    name: "SAP Ariba / MDCS", subtitle: "Enterprise Master Data Platform",
    description: sapSummary,
    stack: ["Java", "Spring Boot", "SAP CAP", "Fiori/UI5", "SAP BTP", "HANA"],
  },
  stockmetrics: {
    name: "Stock Metrics", subtitle: "Financial analysis and recommendation platform",
    description: "Financial analysis and personalized recommendations, combining market insights in a full-stack application.",
    stack: ["React", "Next.js", "TypeScript", "Firebase"],
    live: "https://stock-metrics.vercel.app/", github: "https://github.com/JasmitaChandran/StockMetrics",
  },
};
export const apiProfile = {
  name: profile.name, role: "Full Stack Java Developer",
  backend: stack.Backend.filter((item) => item !== "Spring MVC"),
  messaging: ["Kafka"], cache: ["Redis"], frontend: ["React", "Angular", "SAP Fiori/UI5"],
  cloud: ["SAP BTP"], status: "Open to Java Full Stack & Microservices opportunities",
};
