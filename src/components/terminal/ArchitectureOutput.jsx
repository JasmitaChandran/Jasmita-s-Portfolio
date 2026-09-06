import React from "react";
import { sapWork } from "./profile.mjs";

const stages = [
  [0, " SAP S/4HANA       MDI / OneMDS       Excel Upload"],
  [0, "      │                │                 │"],
  [1, "      └────────────────┼─────────────────┘"],
  [1, "                       ▼"],
  [1, "                 Publish Service"],
  [2, "                       │"],
  [2, "                       ▼"],
  [2, "                    CAP-MDCS ─────→ SAP HANA"],
  [3, "                   /        \\"],
  [3, "                  ▼          ▼"],
  [3, "           Search Service  Meta Service"],
  [4, "                  \\          /"],
  [4, "                   ▼        ▼"],
  [4, "                MDA Portal Backend"],
  [5, "                       │"],
  [5, "                       ▼"],
  [5, "                  SAP Fiori/UI5"],
];
const mobileStages = ["S/4HANA · MDI/OneMDS · Excel Upload", "Publish Service", "CAP-MDCS → SAP HANA", "Search Service + Meta Service", "MDA Portal Backend", "SAP Fiori/UI5"];

export default function ArchitectureOutput() {
  return <div className="terminal-output">
    <h3>SAP Ariba / MDCS · system architecture</h3>
    <p className="terminal-muted">Simplified view of the platform and contribution areas, not an internal deployment diagram.</p>
    <figure className="terminal-architecture" role="img" aria-label="S/4HANA, MDI/OneMDS and Excel feed Publish Service, then CAP-MDCS with SAP HANA storage, Search and Meta Services, MDA Portal Backend, and SAP Fiori/UI5.">
      <pre className="architecture-desktop" aria-hidden="true">{stages.map(([stage, line], index) => <span className="terminal-reveal" style={{ "--delay": `${stage * 90}ms` }} key={index}>{line}{"\n"}</span>)}</pre>
      <ol className="architecture-mobile" aria-hidden="true">{mobileStages.map((stage, index) => <li className="terminal-reveal" style={{ "--delay": `${index * 90}ms` }} key={stage}>{stage}</li>)}</ol>
    </figure>
    <h4>My contribution</h4>
    <ul className="terminal-checks">{sapWork.map((item) => <li key={item}>{item}</li>)}</ul>
  </div>;
}

export function LogFlowArchitecture() {
  const nodes = ["Log Producers", "Ingestion Service", "Apache Kafka", "Processing / Correlation", "PostgreSQL + OpenSearch + Valkey", "Incident Analysis API"];
  return <ol className="terminal-flow" aria-label="LogFlow architecture">{nodes.map((node, index) => <li className="terminal-reveal" style={{ "--delay": `${index * 70}ms` }} key={node}>{node}</li>)}</ol>;
}
