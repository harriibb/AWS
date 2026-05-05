import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { test } from 'node:test';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'test.html'), 'utf8');

test('test.html: document title includes rubric and pipeline QA', () => {
  assert.match(html, /<title>[\s\S]*Rubric[\s\S]*pipeline QA[\s\S]*<\/title>/i);
});

test('test.html: grading sections present', () => {
  assert.match(html, /Planning/i);
  assert.match(html, /Front end/i);
  assert.match(html, /Working pipeline/i);
  assert.match(html, /Live presentation/i);
});

test('test.html: pipeline URL placeholders for demo', () => {
  assert.match(html, /Staging URL/i);
  assert.match(html, /Production URL/i);
});

test('test.html: link back to main site', () => {
  assert.match(html, /href="index\.html"/);
});
