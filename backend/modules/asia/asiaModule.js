// backend/modules/asia/asiaModule.js
// Asia (Singapore) MMI Mode — Academic & Bioethics Engine

const ASIA_CONFIG = {
  readingTime: 60,
  responseTime: 300,
  warningTime: 60,
  interruptionDelay: null, // No interruptions in Asia mode
  interruptionEnabled: false,
  evaluationFrameworks: [
    "Four Principles (Beauchamp & Childress): autonomy, beneficence, non-maleficence, justice",
    "Virtue Ethics: what would a person of good character do?",
    "Consequentialism: evaluate outcomes for greatest good",
    "Deontological: duties and rules regardless of outcomes",
    "Care Ethics: relationships and context-sensitive reasoning",
  ],
  structureGuide: {
    intro: "Briefly define key terms and acknowledge complexity",
    body: "Apply 2-3 ethical principles with evidence",
    conclusion: "Balanced conclusion acknowledging trade-offs",
  },
};

/**
 * Return a relevant ethical framework hint for Singapore mode
 * @param {string} questionText
 * @returns {string}
 */
function suggestFramework(questionText) {
  const lower = questionText.toLowerCase();
  if (lower.includes("autonomy") || lower.includes("refuse") || lower.includes("consent")) {
    return ASIA_CONFIG.evaluationFrameworks[0];
  }
  if (lower.includes("resource") || lower.includes("allocation") || lower.includes("fair")) {
    return ASIA_CONFIG.evaluationFrameworks[0]; // justice principle
  }
  if (lower.includes("research") || lower.includes("trial") || lower.includes("experiment")) {
    return ASIA_CONFIG.evaluationFrameworks[2];
  }
  return ASIA_CONFIG.evaluationFrameworks[0]; // default: four principles
}

module.exports = { ASIA_CONFIG, suggestFramework };
