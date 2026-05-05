import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { test } from 'node:test';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'market.html'), 'utf8');

test('market.html: title references Market or Analysis', () => {
  assert.ok(html.includes('<title>'));
  assert.ok(html.includes('Market') || html.includes('Analysis'));
});

test('market.html: Cole Sherer attribution', () => {
  assert.ok(html.includes('Cole Sherer'));
});

test('market.html: nav links to three pages', () => {
  assert.ok(html.includes('index.html'));
  assert.ok(html.includes('market.html'));
  assert.ok(html.includes('campaign.html'));
});

test('market.html: Strengths & Weaknesses id sw', () => {
  assert.ok(html.includes('id="sw"'));
  assert.ok(html.includes('Strengths'));
  assert.ok(html.includes('Weaknesses'));
});

test('market.html: at least four strengths (sw-prefix +)', () => {
  const strengthMatches = html.match(/sw-prefix.*?\+/g) || [];
  assert.ok(strengthMatches.length >= 4);
});

test('market.html: at least four weaknesses (sw-prefix en-dash)', () => {
  const weaknessMatches = html.match(/sw-prefix.*?–/g) || [];
  assert.ok(weaknessMatches.length >= 4);
});

test('market.html: ratings section', () => {
  assert.ok(html.includes('id="ratings"'));
  assert.ok(html.includes('rating-row'));
  assert.ok(html.includes('Ease of Use'));
  assert.ok(html.includes('Student Project'));
  assert.ok(html.includes('Cost'));
  assert.ok(html.includes('Features'));
});

test('market.html: recommendation id rec', () => {
  assert.ok(html.includes('id="rec"'));
  assert.ok(
    html.includes('Conditionally Recommended') || html.includes('Recommended')
  );
});

test('market.html: footer credits Cole Sherer', () => {
  assert.ok(html.includes('<footer>'));
  assert.ok(html.includes('Cole Sherer'));
});
