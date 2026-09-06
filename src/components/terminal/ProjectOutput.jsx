import React from "react";
import { projects, sapWork } from "./profile.mjs";
import { LogFlowArchitecture } from "./ArchitectureOutput";

export function ProjectLinks({ project }) {
  return <div className="terminal-project-links">
    {[["OPEN PROJECT", project.live], ["VIEW GITHUB", project.github]].map(([label, href]) => href
      ? <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
      : <button key={label} type="button" disabled title="Project URL has not been provided">{label} — unavailable</button>)}
    {(!project.live || !project.github) && <small className="terminal-muted">Project links will be available once supplied.</small>}
  </div>;
}

export function ProjectList({ runCommand }) {
  return <div className="terminal-output terminal-project-list">
    <h3>Featured projects</h3>
    {Object.entries(projects).map(([key, project], index) => <article key={key}>
      <button type="button" className="terminal-text-button" onClick={() => runCommand(`project ${key}`)}>{index + 1}. {project.name}</button>
      <p>{project.subtitle}</p>
      <p className="terminal-tech">{project.stack.join(" · ")}</p>
      <button type="button" className="terminal-command-link" onClick={() => runCommand(`project ${key}`)}>project {key} →</button>
    </article>)}
  </div>;
}

export default function ProjectOutput({ result }) {
  const project = projects[result.project];
  if (!project) return <p>Project not found. Type projects to see available projects.</p>;
  return <div className="terminal-output">
    <h3>{project.name}</h3><p>{project.subtitle}</p>
    <h4>Purpose</h4><p>{project.description}</p>
    {result.project === "logflow" && <><h4>Architecture</h4><LogFlowArchitecture/></>}
    {result.project === "sap" && <>
      <dl className="terminal-definition-list">
        {Object.entries({ Frontend: "SAP Fiori/UI5", "Application backend": "MDA Portal Backend", Microservices: "Publish Service · Search Service · Meta Service · MDCS Client", Core: "CAP-MDCS", Database: "SAP HANA", Integrations: "S/4HANA · MDI / OneMDS · File Upload" }).map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
      </dl>
      <h4>My work</h4><ul className="terminal-checks">{sapWork.map((item) => <li key={item}>{item}</li>)}</ul>
      <p className="terminal-muted">Professional experience · no private source code or internal links.</p>
    </>}
    <h4>Stack</h4><p className="terminal-tech">{project.stack.join(" · ")}</p>
    {result.project !== "sap" && <ProjectLinks project={project}/>}
  </div>;
}
