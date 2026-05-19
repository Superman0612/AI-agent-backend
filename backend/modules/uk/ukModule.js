// backend/modules/uk/ukModule.js
// UK MMI Mode — NHS Structured Interview Engine

const UK_CONFIG = {
  readingTime: 45,
  responseTime: 300,
  warningTime: 60,
  interruptionDelay: 120, // interrupt at 2 minutes
  clarificationPhrases: [
    "Can you clarify that point?",
    "Be more specific, please.",
    "Could you elaborate on that?",
    "What exactly do you mean by that?",
    "Can you give a concrete example?",
    "How does this relate to NHS practice specifically?",
    "What evidence supports that position?",
  ],
};

/**
 * Return a clarification prompt for UK mode
 * @param {string} partialAnswer
 * @returns {string}
 */
function getClarificationPrompt(partialAnswer) {
  const lower = partialAnswer.toLowerCase();
  if (lower.includes("nhs") || lower.includes("hospital")) {
    return UK_CONFIG.clarificationPhrases[5];
  }
  if (lower.includes("evidence") || lower.includes("research") || lower.includes("study")) {
    return UK_CONFIG.clarificationPhrases[6];
  }
  const idx = Math.floor(Math.random() * 5);
  return UK_CONFIG.clarificationPhrases[idx];
}

module.exports = { UK_CONFIG, getClarificationPrompt };
