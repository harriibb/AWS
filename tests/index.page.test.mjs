import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { test } from 'node:test';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');

test('index.html: document title', () => {
  assert.match(html, /<title>\s*Bring Micro Center to Stillwater\s*<\/title>/);
});

test('index.html: main campaign hero copy', () => {
  assert.match(html, /Micro Center/i);
  assert.match(html, /Stillwater/i);
});

test('index.html: pipeline / product review sections exist', () => {
  assert.match(html, /CodePipeline|CodeBuild|CodeDeploy/);
});

test('index.html: sticky photo reveal section', () => {
  assert.match(html, /id="photoReveal"/);
  assert.match(html, /photo-bg-stack/);
  assert.match(html, /id="photoGridNine"/);
});

test('index.html: link to rubric QA page', () => {
  assert.match(html, /href="test\.html"/);
});
