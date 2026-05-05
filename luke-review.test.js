// luke-review.test.js
// Unit tests for luke-review.html
// Run with: node luke-review.test.js

const pageTitle = "AWS Product Review — Introduction & Strengths";
const strengths = [
  "Free tier includes 1 active CodePipeline per month",
  "No server maintenance — fully managed infrastructure",
  "Native integration with 200+ AWS services",
  "Scales automatically from small to enterprise workloads",
  "Pay-per-use pricing — no upfront cost",
  "Strong IAM-based security and compliance controls",
  "GUI-based pipeline editor with drag-and-drop stages",
  "Extensive documentation and community support"
];
const weaknesses = [
  "Steep learning curve for AWS beginners",
  "Costs can escalate quickly without usage monitoring",
  "Heavily tied to AWS ecosystem — limited portability",
  "CodePipeline UI less intuitive than GitHub Actions YAML",
  "Debugging build failures requires navigating multiple consoles",
  "Limited built-in testing integrations vs competitors",
  "Free tier insufficient for multi-pipeline student projects"
];

console.log("Running luke-review tests...\n");

// Test 1: Page title contains "Review"
try {
  console.assert(pageTitle.includes("Review"), "FAIL: pageTitle does not contain 'Review'");
  console.log("Test 1 PASS: pageTitle contains 'Review'");
} catch (e) {
  console.log("Test 1 FAIL: " + e.message);
}

// Test 2: Strengths array has items
try {
  console.assert(strengths.length > 0, "FAIL: strengths array is empty");
  console.log("Test 2 PASS: strengths has " + strengths.length + " items");
} catch (e) {
  console.log("Test 2 FAIL: " + e.message);
}

// Test 3: Weaknesses array has items
try {
  console.assert(weaknesses.length > 0, "FAIL: weaknesses array is empty");
  console.log("Test 3 PASS: weaknesses has " + weaknesses.length + " items");
} catch (e) {
  console.log("Test 3 FAIL: " + e.message);
}

console.log("\nAll tests complete.");
