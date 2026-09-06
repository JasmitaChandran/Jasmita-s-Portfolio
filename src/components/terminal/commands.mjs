export const prompt = "jasmita@portfolio:~$";
export const commandRegistry = {
  help: { kind: "help", description: "Available commands" },
  whoami: { kind: "profile", description: "Developer profile" },
  stack: { kind: "stack", description: "Technical stack" },
  experience: { kind: "experience", description: "SAP Labs experience" },
  architecture: { kind: "architecture", description: "View system architecture" },
  projects: { kind: "projects", description: "Featured projects" },
  impact: { kind: "impact", description: "Engineering impact" },
  resume: { kind: "resume", description: "View resume" },
  contact: { kind: "contact", description: "Contact details" },
  clear: { kind: "clear", description: "Clear terminal" },
  "project logflow": { kind: "project", project: "logflow", description: "Explore LogFlow" },
  "project sap": { kind: "project", project: "sap", description: "Explore SAP Ariba / MDCS" },
  "project stockmetrics": { kind: "project", project: "stockmetrics", description: "Explore Stock Metrics" },
  "trace incident-101": { kind: "trace", description: "Simulated debugging demo" },
  services: { kind: "services", description: "Service-status Easter egg" },
  "curl /api/profile": { kind: "api", description: "Profile as JSON (local demo)" },
  "java --version": { kind: "java", description: "Developer runtime" },
  coffee: { kind: "coffee", description: "Restore developer fuel" },
  "sudo hire jasmita": { kind: "hire", description: "Go to contact" },
};
export const quickCommands = ["whoami", "stack", "experience", "architecture", "projects", "impact", "contact"];
export const helpCommands = ["whoami", "stack", "experience", "architecture", "projects", "impact", "resume", "contact", "clear"];
const aliases = { about: "whoami", skills: "stack" };
export const normalizeCommand = (value) => value.trim().toLowerCase().replace(/\s+/g, " ");
export function parseCommand(raw) {
  const normalized = normalizeCommand(raw);
  const command = Object.hasOwn(aliases, normalized) ? aliases[normalized] : normalized;
  if (!command) return null;
  if (Object.hasOwn(commandRegistry, command)) return { ...commandRegistry[command], command };
  return { kind: "error", command, message: `command not found: ${raw.trim().slice(0, 160)}` };
}
export function autocomplete(value) {
  const prefix = normalizeCommand(value);
  if (!prefix) return { value, matches: [] };
  const matches = Object.keys(commandRegistry).filter((command) => command.startsWith(prefix));
  return { value: matches.length === 1 ? matches[0] : value, matches };
}
export const initialEntries = [{ id: 0, input: "help", result: parseCommand("help"), animate: false }];
export function appendEntry(entries, entry) {
  return entry.result.kind === "clear" ? [] : [...entries, entry].slice(-60);
}
export function navigateHistory(history, index, draft, direction) {
  const next = Math.max(0, Math.min(history.length, index + direction));
  return { index: next, value: next === history.length ? draft : history[next] ?? draft };
}
