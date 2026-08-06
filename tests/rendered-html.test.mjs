import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../out/", import.meta.url);

const routes = [
  ["index.html", "3 DAY WEEKEND LAB."],
  ["en/index.html", "Small tools for"],
  ["products/kkiu/index.html", "KKIU"],
  ["en/products/kkiu/index.html", "KKIU"],
];

test("exports every Korean and English route", async () => {
  for (const [path, expected] of routes) {
    const html = await readFile(new URL(path, root), "utf8");
    assert.match(html, new RegExp(expected, "i"), path);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i, path);
  }
});

test("includes GitHub Pages domain files", async () => {
  await access(new URL("CNAME", root));
  await access(new URL(".nojekyll", root));
  const cname = await readFile(new URL("CNAME", root), "utf8");
  assert.equal(cname.trim(), "www.3dayweekendlab.com");
});

test("uses the full studio name and sends product traffic to the Kkiu site", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  assert.doesNotMatch(html, /3DWL|INDEPENDENT DEVELOPMENT STUDIO|SEOUL · KR/i);
  assert.match(html, /https:\/\/kkiu\.3dayweekendlab\.com\//i);
});

test("sends contact links to the inquiry form", async () => {
  for (const path of ["index.html", "en/index.html"]) {
    const html = await readFile(new URL(path, root), "utf8");
    assert.match(html, /https:\/\/forms\.gle\/9Ljt3w7MaNJfumLb8/i, path);
  }
});
