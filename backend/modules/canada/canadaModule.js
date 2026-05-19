// backend/modules/canada/canadaModule.js
// Canada MMI Mode — Deep Ethical Reasoning Engine

const CANADA_CONFIG = {
  readingTime: 120,
  responseTime: 360,
  warningTime: 60,
  interruptionDelay: 180, // interrupt after 3 min of response time
  followUpTemplates: [
    "What if the person affected were a family member? Does your answer change?",
    "Consider the long-term systemic implications of your approach.",
    "What ethical framework are you applying, and why did you choose it?",
    "How would this decision affect the most vulnerable people involved?",
    "What would you do if your course of action had unintended negative consequences?",
    "Is there a perspective you haven't yet considered?",
  ],
};

/**
 * Select a context-aware follow-up for Canada mode
 * @param {string} partialAnswer
 * @returns {string}
 */
function selectFollowUp(partialAnswer) {
  const lower = partialAnswer.toLowerCase();
  if (lower.includes("family") || lower.includes("friend")) {
    return CANADA_CONFIG.followUpTemplates[2];
  }
  if (lower.includes("system") || lower.includes("policy")) {
    return CANADA_CONFIG.followUpTemplates[3];
  }
  // Default: rotate through templates
  const idx = Math.floor(Math.random() * CANADA_CONFIG.followUpTemplates.length);
  return CANADA_CONFIG.followUpTemplates[idx];
}

module.exports = { CANADA_CONFIG, selectFollowUp };
