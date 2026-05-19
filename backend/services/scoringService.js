// services/scoringService.js — Score Calculation & Aggregation
/**
 * Calculate weighted scores based on mode emphasis
 * @param {Object} rawScores - { clarity, structure, empathy, reasoning }
 * @param {string} mode
 * @returns {Object} Weighted total + breakdown
 */
function calculateWeightedScore(rawScores, mode) {
  // Mode-specific weighting of the four pillars
  const weights = {
    canada: { clarity: 0.2, structure: 0.2, empathy: 0.25, reasoning: 0.35 },
    uk: { clarity: 0.25, structure: 0.25, empathy: 0.1, reasoning: 0.1, nhsRelevance: 0.3 },
    australia: { clarity: 0.15, structure: 0.15, empathy: 0.45, reasoning: 0.25 },
    asia: { clarity: 0.25, structure: 0.35, empathy: 0.1, reasoning: 0.3 },
  };

  const w = weights[mode] || weights.canada;
  let weighted =
    (rawScores.clarity || 0) * w.clarity +
    (rawScores.structure || 0) * w.structure +
    (rawScores.empathy || 0) * w.empathy +
    (rawScores.reasoning || 0) * w.reasoning;

  if (w.nhsRelevance && rawScores.nhsRelevance != null) {
    weighted += rawScores.nhsRelevance * w.nhsRelevance;
  }

  const breakdown = {
    clarity: { raw: rawScores.clarity, weight: w.clarity },
    structure: { raw: rawScores.structure, weight: w.structure },
    empathy: { raw: rawScores.empathy, weight: w.empathy },
    reasoning: { raw: rawScores.reasoning, weight: w.reasoning },
  };

  if (w.nhsRelevance) {
    breakdown.nhsRelevance = { raw: rawScores.nhsRelevance, weight: w.nhsRelevance };
  }

  return {
    weightedTotal: Math.round(weighted * 10) / 10,
    breakdown,
  };
}

/**
 * Aggregate scores across all session answers
 * @param {Array} answers - Array with evaluation objects
 * @param {string} mode
 * @returns {Object} Session-level aggregated scores
 */
function aggregateSessionScores(answers, mode) {
  const evaluated = answers.filter((a) => a.evaluation && a.evaluation.totalScore != null);
  if (evaluated.length === 0) return null;

  const avg = (key) =>
    Math.round((evaluated.reduce((sum, a) => sum + (a.evaluation[key] || 0), 0) / evaluated.length) * 10) / 10;

  const avgScores = {
    clarity: avg("clarity"),
    structure: avg("structure"),
    empathy: avg("empathy"),
    reasoning: avg("reasoning"),
  };

  if (mode === "uk") {
    avgScores.nhsRelevance = avg("nhsRelevance");
  }

  const { weightedTotal } = calculateWeightedScore(avgScores, mode);

  return {
    averageScores: avgScores,
    weightedOverall: weightedTotal,
    questionsAttempted: evaluated.length,
    totalQuestions: answers.length,
  };
}

/**
 * Map numeric score to a performance tier label
 * @param {number} score - 0 to 10
 * @returns {string}
 */
function getPerformanceTier(score) {
  if (score >= 9) return "Exceptional";
  if (score >= 7.5) return "Strong";
  if (score >= 6) return "Competent";
  if (score >= 4) return "Developing";
  return "Needs Improvement";
}

module.exports = { calculateWeightedScore, aggregateSessionScores, getPerformanceTier };
