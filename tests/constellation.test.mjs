import test from "node:test";
import assert from "node:assert/strict";
import { constellationSkills, skillGroups, skillPosition } from "../src/components/constellationSkills.mjs";
import { stack, projects } from "../src/components/terminal/profile.mjs";

test("constellation includes all listed skill groups and normalized terminal/project skills", () => {
  const aliases = { "Git/GitHub": "Git", "Fiori/UI5": "SAP Fiori/UI5", HANA: "SAP HANA" };
  const expected = [...skillGroups.flatMap(group => group.items), ...Object.values(stack).flat(), ...Object.values(projects).flatMap(project => project.stack), "Node.js", "GitHub"];
  for (const skill of expected) assert.ok(constellationSkills.includes(aliases[skill] ?? skill), skill);
  assert.equal(new Set(constellationSkills).size, constellationSkills.length);
});

test("all skill positions are distinct, finite and within the scene bounds", () => {
  const positions = constellationSkills.map((_, index) => skillPosition(index, constellationSkills.length));
  assert.equal(new Set(positions.map(position => JSON.stringify(position))).size, constellationSkills.length);
  for (const { x, y, z } of positions) {
    assert.ok(Number.isFinite(x) && Math.abs(x) <= 3);
    assert.ok(Number.isFinite(y) && Math.abs(y) <= 2.1);
    assert.ok(Number.isFinite(z) && Math.abs(z) <= 2.4);
  }
});
