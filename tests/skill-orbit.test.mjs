import test from "node:test";
import assert from "node:assert/strict";
import { skillGroups } from "../src/components/constellationSkills.mjs";
import { orbitSkills, orbitPosition, orbitLogos, orbitIconColors, orbitLogoBackplates } from "../src/components/skillOrbit.mjs";

test("new branded skills use original colored logos or explicit brand colors", () => {
  const brands = ["HTML", "CSS", "Spring Core & Spring MVC", "JUnit & Mockito", "JSON", "Kafka", "Redis", "Bruno", "SonarQube", "PostgreSQL", "SQLite", "OpenSearch", "Docker", "DBeaver", "Jenkins", "Maven", "Linux", "TypeScript", "MongoDB", "GitHub", "Swagger"];
  for (const name of brands) {
    assert.ok(orbitLogos[name]?.endsWith("-original.svg") || /^#[0-9a-f]{6}$/i.test(orbitIconColors[name] ?? ""), name);
  }
  assert.equal(orbitIconColors.Bruno, "#F4AA41");
  assert.equal(orbitIconColors.OpenSearch, "#005EB8");
  for (const name of ["Kafka", "GitHub", "JSON", "DBeaver"]) assert.ok(orbitLogoBackplates.has(name));
});

test("visual orbit includes every table label and preserves Git and NodeJS", () => {
  for (const skill of skillGroups.flatMap(group => group.items)) assert.ok(orbitSkills.includes(skill), skill);
  assert.ok(orbitSkills.includes("Git"));
  assert.ok(orbitSkills.includes("NodeJS"));
  assert.equal(new Set(orbitSkills).size, orbitSkills.length);
  assert.ok(!orbitSkills.includes("SAP UI5"), "Use the table's SAP Fiori/UI5 label without duplicates");
});

test("desktop orbit tiles fit and do not overlap at the smallest orbit width", () => {
  const scale = (1100 - 32) / 1180;
  const positions = orbitSkills.map((_, index) => orbitPosition(index, orbitSkills.length));
  for (const [index, point] of positions.entries()) {
    assert.ok(Math.abs(point.x) * scale + 52 < 1068 / 2);
    assert.ok(Math.abs(point.y) * scale + 40 < 940 * scale / 2);
    for (const other of positions.slice(index + 1)) {
      assert.ok(Math.abs(point.x - other.x) * scale >= 104 || Math.abs(point.y - other.y) * scale >= 80);
    }
  }
});
