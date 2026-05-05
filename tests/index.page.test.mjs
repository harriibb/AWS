import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
import { test } from 'node:test';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');

test('Page has title referencing Micro Center or Stillwater', () => {
  assert.ok(html.includes('<title>'), 'Page should have a title tag');
  assert.ok(
    html.includes('Micro Center') || html.includes('Stillwater'),
    'Title should reference Micro Center or Stillwater'
  );
});

test('Boot screen and boot-terminal exist', () => {
  assert.ok(html.includes('id="boot"'), 'Boot screen element should exist');
  assert.ok(html.includes('boot-terminal'), 'Boot terminal should be present');
});

test('Hero section exists with Bring headline', () => {
  assert.ok(
    html.includes('class="hero"') || html.includes("class='hero'"),
    'Hero section should exist'
  );
  assert.ok(html.includes('Bring'), 'Hero should contain campaign headline');
});

test('Nav links to all three pages', () => {
  assert.ok(html.includes('index.html'), 'Nav should link to index.html (home)');
  assert.ok(html.includes('market.html'), 'Nav should link to market.html');
  assert.ok(html.includes('campaign.html'), 'Nav should link to campaign.html');
});

test('Intro section attributed to Blake Harrison', () => {
  assert.ok(html.includes('id="intro"'), 'Intro section should have id="intro"');
  assert.ok(html.includes('Blake Harrison'), 'Intro section should be attributed to Blake Harrison');
});

test('CodePipeline, CodeBuild, CodeDeploy mentioned', () => {
  assert.ok(html.includes('CodePipeline'), 'Should mention CodePipeline');
  assert.ok(html.includes('CodeBuild'), 'Should mention CodeBuild');
  assert.ok(html.includes('CodeDeploy'), 'Should mention CodeDeploy');
});

test('Sticky nav exists', () => {
  assert.ok(html.includes('id="stickyNav"'), 'Sticky nav should exist');
});

test('Stats 28K/28,000 and 3,500 present', () => {
  assert.ok(html.includes('28K') || html.includes('28,000'), 'Should display OSU enrollment stat');
  assert.ok(html.includes('3,500'), 'Should display tech majors stat');
});

test('Photo reveal section exists', () => {
  assert.ok(
    html.includes('photo-reveal-section') || html.includes('photoReveal'),
    'Photo reveal section should exist'
  );
});

test('Footer references OSU', () => {
  assert.ok(html.includes('<footer>'), 'Page should have a footer');
  assert.ok(html.includes('OSU'), 'Footer should reference OSU');
});
