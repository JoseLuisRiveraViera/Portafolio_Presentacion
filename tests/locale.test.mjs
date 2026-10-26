import assert from "node:assert/strict";
import test from "node:test";
import { resolveLocale } from "../src/lib/locale.ts";

test("a saved Spanish choice wins over an English browser", () => {
  assert.equal(resolveLocale("es", "en-US,en;q=0.9"), "es");
});

test("a saved English choice wins over a Spanish browser", () => {
  assert.equal(resolveLocale("en", "es-MX,es;q=0.9"), "en");
});

test("regional English and Spanish preferences use their supported base language", () => {
  assert.equal(resolveLocale(undefined, "en-GB,en;q=0.9,es;q=0.8"), "en");
  assert.equal(resolveLocale(undefined, "es-MX,es;q=0.9,en;q=0.8"), "es");
});

test("language quality has priority over header order", () => {
  assert.equal(resolveLocale(undefined, "es;q=0.3,en-US;q=0.9"), "en");
});

test("unsupported languages can fall back to a supported secondary preference", () => {
  assert.equal(resolveLocale(undefined, "fr-FR,fr;q=0.9,en;q=0.7"), "en");
});

test("excluded or malformed language weights are ignored", () => {
  assert.equal(resolveLocale(undefined, "en;q=0,es;q=0.8"), "es");
  assert.equal(resolveLocale(undefined, "en;q=invalid,es;q=0.8"), "es");
  assert.equal(resolveLocale(undefined, "en;q=2,es;q=0.8"), "es");
});

test("invalid saved preferences cannot override browser detection", () => {
  assert.equal(resolveLocale("fr", "EN-us,es;q=0.5"), "en");
  assert.equal(resolveLocale("<script>", "en"), "en");
});

test("missing or unsupported preferences use Spanish", () => {
  assert.equal(resolveLocale(undefined, null), "es");
  assert.equal(resolveLocale(undefined, ""), "es");
  assert.equal(resolveLocale(undefined, "de,ja;q=0.8,*;q=0.1"), "es");
});
