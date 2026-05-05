import { readFileSync } from 'fs';
import { strict as assert } from 'assert';

const html = readFileSync('./market.html', 'utf8');

// Test 1: Page has correct title
assert.ok(html.includes('<title>'), 'Page should have a title tag');
assert.ok(
  html.includes('Market') || html.includes('Analysis'),
  'Title should reference Market or Analysis'
);

// Test 2: Page is attributed to Cole Sherer
assert.ok(html.includes('Cole Sherer'), 'Page should be attributed to Cole Sherer');

// Test 3: Navigation links to all three pages
assert.ok(html.includes('index.html'), 'Nav should link to index.html');
assert.ok(html.includes('market.html'), 'Nav should link to market.html');
assert.ok(html.includes('campaign.html'), 'Nav should link to campaign.html');

// Test 4: Strengths and Weaknesses section exists
assert.ok(html.includes('id="sw"'), 'Strengths & Weaknesses section should have id="sw"');
assert.ok(html.includes('Strengths'), 'Should contain Strengths content');
assert.ok(html.includes('Weaknesses'), 'Should contain Weaknesses content');

// Test 5: At least 4 strengths are listed
const strengthMatches = html.match(/sw-prefix.*?\+/g) || [];
assert.ok(strengthMatches.length >= 4, 'Should list at least 4 strengths');

// Test 6: At least 4 weaknesses are listed
const weaknessMatches = html.match(/sw-prefix.*?–/g) || [];
assert.ok(weaknessMatches.length >= 4, 'Should list at least 4 weaknesses');

// Test 7: Ratings section exists with correct id
assert.ok(html.includes('id="ratings"'), 'Ratings section should have id="ratings"');
assert.ok(html.includes('rating-row'), 'Rating rows should be present');

// Test 8: All four rating categories present
assert.ok(html.includes('Ease of Use'), 'Should have Ease of Use rating');
assert.ok(html.includes('Student Project'), 'Should have Student Project Usefulness rating');
assert.ok(html.includes('Cost'), 'Should have Cost rating');
assert.ok(html.includes('Features'), 'Should have Features rating');

// Test 9: Recommendation section exists
assert.ok(html.includes('id="rec"'), 'Recommendation section should have id="rec"');
assert.ok(
  html.includes('Conditionally Recommended') || html.includes('Recommended'),
  'Should contain recommendation verdict'
);

// Test 10: Page has a footer
assert.ok(html.includes('<footer>'), 'Page should have a footer');
assert.ok(html.includes('Cole Sherer'), 'Footer should credit Cole Sherer');

console.log('✓ All market.html tests passed (10/10)');
