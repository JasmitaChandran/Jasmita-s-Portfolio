import React, { memo } from "react";
import { Link } from "react-router-dom";
import { commandRegistry, helpCommands } from "./commands.mjs";
import { apiProfile, contributions, impact, profile, sapSummary, stack } from "./profile.mjs";
import ArchitectureOutput from "./ArchitectureOutput";
import ProjectOutput, { ProjectList } from "./ProjectOutput";

function HelpOutput({ runCommand }) {
  return <div className="terminal-output">
    <p>Available commands — type below or click a command.</p>
    <dl className="terminal-help">{helpCommands.map((command) => <div key={command}><dt><button type="button" onClick={() => runCommand(command)}>{command}</button></dt><dd>{commandRegistry[command].description}</dd></div>)}</dl>
    <p className="terminal-muted">↑ ↓ history · Tab autocomplete · Escape clears input</p>
    <details><summary>More commands & small Easter eggs</summary><div className="terminal-extras">{Object.keys(commandRegistry).filter((command) => !["help", ...helpCommands].includes(command)).map((command) => <button type="button" key={command} onClick={() => runCommand(command)}>{command}</button>)}</div></details>
  </div>;
}
function ProfileOutput() {
  return <div className="terminal-output"><h3>{profile.name}</h3><p className="terminal-tech">{profile.role}</p><p>{profile.title} @ {profile.employer}</p><h4>Focus</h4><ul className="terminal-arrows">{["Java / Spring Boot", "Microservices & Distributed Systems", "REST APIs", "React / Angular / SAP Fiori/UI5", "Enterprise Application Development"].map((item) => <li key={item}><strong>{item}</strong></li>)}</ul></div>;
}
function StackOutput() {
  return <div className="terminal-output terminal-category-grid">{Object.entries(stack).map(([category, items]) => <section key={category}><h4>{category}</h4><p>{items.join(" · ")}</p></section>)}</div>;
}
function ExperienceOutput() {
  return <div className="terminal-output"><h3>{profile.employer}</h3><p>{profile.title} · {profile.experience} Experience</p><h4>SAP Ariba Procurement – Master Data Application (MDApp/MDCS)</h4><p>{sapSummary}</p><div className="terminal-category-grid">{Object.entries(contributions).map(([category, items]) => <section key={category}><h4>{category}</h4><ul className="terminal-arrows">{items.map((item) => <li key={item}>{item}</li>)}</ul></section>)}</div></div>;
}
function ImpactOutput() {
  return <div className="terminal-output"><h3>Engineering impact</h3><dl className="terminal-impact">{impact.map(([number, label]) => <div key={label}><dt>{number}</dt><dd>{label}</dd></div>)}</dl></div>;
}
function ContactOutput() {
  return <div className="terminal-output"><h3>Let’s talk Java, full stack & microservices.</h3><dl className="terminal-contacts">{profile.contact.map((contact) => <div key={contact.label}><dt>{contact.label}</dt><dd><a href={contact.href} target={contact.href.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">{contact.text}</a></dd></div>)}</dl></div>;
}
function ResumeOutput() {
  return <div className="terminal-output"><p>Opening resume…</p><p className="terminal-muted">If your browser blocks the new tab, use the link below.</p><a className="terminal-action" href={profile.resume} target="_blank" rel="noopener noreferrer">VIEW RESUME ↗</a></div>;
}
function TraceOutput({ runCommand }) {
  const rows = [["21:04:17", "API Gateway", "200 OK"], ["21:04:18", "Order Service", "200 OK"], ["21:04:18", "Kafka", "EVENT PUBLISHED"], ["21:04:19", "Payment Service", "500 ERROR"], ["21:04:19", "Retry #1", "FAILED"], ["21:04:20", "Retry #2", "FAILED"]];
  return <div className="terminal-output"><h3>incident-101 · simulated trace</h3><p className="terminal-muted">Illustrative debugging demo. No connection to a live system.</p>
    <ol className="terminal-trace">{rows.map(([time, service, status], index) => <li key={service} className={`terminal-reveal ${index > 2 ? "trace-error" : "trace-ok"}`} style={{ "--delay": `${index * 120}ms` }}><time>[{time}]</time><span>{service}</span><strong>{status}</strong></li>)}</ol>
    <div className="terminal-reveal terminal-root-cause" style={{ "--delay": "760ms" }}><h4>Root cause detected</h4><p>→ Payment Service<br/>→ Database connection timeout</p><p>Affected services: 2 · Severity: <strong>HIGH</strong></p><p>This demonstrates the type of distributed failure analysis explored in LogFlow.</p><button type="button" className="terminal-action" onClick={() => runCommand("project logflow")}>EXPLORE LOGFLOW →</button></div>
  </div>;
}
function ServicesOutput({ coffeeRestored }) {
  return <div className="terminal-output"><h3>Service status · Easter egg</h3><p className="terminal-muted">Playful local status display, not real infrastructure monitoring.</p><table className="terminal-services"><thead><tr><th>SERVICE</th><th>STATUS</th></tr></thead><tbody>{["profile", "project", "experience", "skills", "coffee"].map((service) => <tr key={service}><td>{service}-service</td><td className={service === "coffee" && !coffeeRestored ? "status-degraded" : "status-up"}>{service === "coffee" && !coffeeRestored ? "● DEGRADED ☕" : "● UP"}</td></tr>)}</tbody></table></div>;
}
function ApiOutput() {
  const lines = JSON.stringify(apiProfile, null, 2).split("\n");
  return <div className="terminal-output"><p className="terminal-muted">Local profile representation · no API request is sent.</p><pre className="terminal-json"><code>{lines.map((line, index) => <React.Fragment key={index}>{line.split(/("(?:[^"\\]|\\.)*")/g).map((part, token) => <span key={token} className={part.startsWith('"') ? (line.slice(line.indexOf(part) + part.length).trimStart().startsWith(":") ? "json-key" : "json-string") : undefined}>{part}</span>)}{"\n"}</React.Fragment>)}</code></pre></div>;
}
function JavaOutput() {
  return <div className="terminal-output"><h3>Jasmita Runtime Environment</h3><p>Java Developer Edition 4.0</p><dl className="terminal-definition-list">{["Spring Boot", "Microservices", "Distributed Sys.", "Production Debug"].map((label) => <div key={label}><dt>{label}</dt><dd className="status-up">ENABLED</dd></div>)}</dl></div>;
}
function CoffeeOutput() {
  return <div className="terminal-output"><p>Brewing developer fuel…</p><div className="coffee-progress" aria-hidden="true"><span/></div><p className="terminal-reveal" style={{ "--delay": "450ms" }}>100% · Coffee service restored ☕</p></div>;
}
function HireOutput() {
  return <div className="terminal-output"><p>Permission granted.</p><p>Ready to connect?</p><Link className="terminal-action" to="/contact">OPEN CONTACT →</Link></div>;
}
function ErrorOutput({ result }) {
  return <div className="terminal-output terminal-error"><p>{result.message}</p><p>Type &quot;help&quot; to view available commands.</p></div>;
}

const outputs = { help: HelpOutput, profile: ProfileOutput, stack: StackOutput, experience: ExperienceOutput, architecture: ArchitectureOutput, projects: ProjectList, project: ProjectOutput, impact: ImpactOutput, contact: ContactOutput, resume: ResumeOutput, trace: TraceOutput, services: ServicesOutput, api: ApiOutput, java: JavaOutput, coffee: CoffeeOutput, hire: HireOutput, error: ErrorOutput };
export default memo(function TerminalOutput(props) {
  const Output = outputs[props.result.kind] || ErrorOutput;
  return <Output {...props}/>;
});
