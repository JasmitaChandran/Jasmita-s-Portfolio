import test from "node:test";
import assert from "node:assert/strict";
import { appendEntry, autocomplete, commandRegistry, initialEntries, navigateHistory, parseCommand, quickCommands } from "../src/components/terminal/commands.mjs";
import { apiProfile, impact, metrics, profile, projects, stack } from "../src/components/terminal/profile.mjs";

test("the default state is help only", () => {
  assert.equal(initialEntries.length, 1);
  assert.equal(initialEntries[0].input, "help");
  assert.equal(initialEntries[0].result.kind, "help");
});
test("every advertised command is recognized", () => {
  for (const command of Object.keys(commandRegistry)) assert.notEqual(parseCommand(command).kind, "error", command);
  for (const command of quickCommands) assert.ok(commandRegistry[command]);
});
test("commands accept case and whitespace variations and retain old aliases", () => {
  assert.equal(parseCommand("  PROJECT   LOGFLOW  ").project, "logflow");
  assert.equal(parseCommand("ABOUT").kind, "profile");
  assert.equal(parseCommand("skills").kind, "stack");
  assert.equal(parseCommand("\t"), null);
});
test("unknown commands including prototype keys are inert errors", () => {
  for (const command of ["xyz", "constructor", "__proto__", "toString", "project missing", "curl /api/private", "<script>alert(1)</script>", "whoami; rm -rf /"]) {
    const result = parseCommand(command);
    assert.equal(result.kind, "error"); assert.equal(typeof result.command, "string");
  }
});
test("parameterized project, trace, and profile commands resolve independently", () => {
  for (const key of Object.keys(projects)) assert.equal(parseCommand(`project ${key}`).project, key);
  assert.equal(parseCommand("trace incident-101").kind, "trace");
  assert.equal(parseCommand("curl /api/profile").kind, "api");
});
test("autocomplete completes unique prefixes and reports ambiguous prefixes", () => {
  assert.equal(autocomplete("arch").value, "architecture");
  assert.equal(autocomplete("project log").value, "project logflow");
  assert.ok(autocomplete("project").matches.length > 1);
  assert.deepEqual(autocomplete("nonsense").matches, []);
  assert.equal(autocomplete("").value, "");
});
test("arrow history restores a draft and respects boundaries", () => {
  const history = ["whoami", "stack"];
  assert.deepEqual(navigateHistory(history, 2, "unfinished", -1), { index: 1, value: "stack" });
  assert.deepEqual(navigateHistory(history, 0, "unfinished", -1), { index: 0, value: "whoami" });
  assert.deepEqual(navigateHistory(history, 1, "unfinished", 1), { index: 2, value: "unfinished" });
  assert.deepEqual(navigateHistory([], 0, "draft", -1), { index: 0, value: "draft" });
});
test("clear removes all output instead of restarting help", () => {
  assert.deepEqual(appendEntry(initialEntries, { result: parseCommand("clear") }), []);
});
test("output history is bounded for long browsing sessions", () => {
  let history = initialEntries;
  for (let id = 1; id <= 100; id++) history = appendEntry(history, { id, result: parseCommand("whoami") });
  assert.equal(history.length, 60); assert.equal(history[0].id, 41);
});
test("impact figures and categories use the supplied facts", () => {
  assert.deepEqual(Object.values(metrics), ["50+", "40+", "30+", "40+", "10K+", "5%", "120+"]);
  assert.equal(impact.length, 7);
  assert.ok(stack.Backend.includes("Spring Boot"));
  assert.equal(JSON.stringify(stack).includes("%"), false);
});
test("public contact and resume routes preserve existing destinations", () => {
  assert.equal(profile.resume, "/resume");
  assert.equal(profile.contact[0].href, "mailto:jasmitachandran24@gmail.com");
  assert.equal(profile.contact.length, 3);
  assert.equal(profile.contact.some((link) => /wa.me|instagram/.test(link.href)), false);
});
test("API representation is valid JSON with Java-first positioning", () => {
  assert.deepEqual(JSON.parse(JSON.stringify(apiProfile)), apiProfile);
  assert.equal(apiProfile.backend[0], "Java");
  assert.equal(apiProfile.role, "Full Stack Java Developer");
});
