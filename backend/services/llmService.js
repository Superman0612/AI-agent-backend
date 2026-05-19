const OpenAI = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Evaluate a single MMI answer using GPT-4
 * @param {string} questionText
 * @param {string} answerText
 * @param {string} mode - canada | uk | australia | asia
 * @param {Object} idealAnswerFramework - Optional ideal framework to compare against
 * @returns {Object} Evaluation scores + feedback
 */
async function evaluateAnswer(questionText, answerText, mode, idealAnswerFramework) {
  const modeContext = {
    canada: "a Canadian medical school MMI focused on ethical reasoning and critical thinking",
    uk: "a UK NHS-focused MMI emphasising clarity, structure, and professional communication",
    australia: "an Australian medical school MMI emphasising empathy, roleplay, and emotional intelligence",
    asia: "a Singapore medical school MMI focused on academic knowledge, bioethics, and structured frameworks",
  };

  let prompt = `You are an expert MMI (Multiple Mini Interview) evaluator for ${modeContext[mode]}.\n\n`;
  prompt += `QUESTION ASKED:\n"${questionText}"\n\n`;
  
  if (idealAnswerFramework) {
    prompt += `IDEAL ANSWER FRAMEWORK:\n${JSON.stringify(idealAnswerFramework, null, 2)}\n\n`;
  }
  
  prompt += `CANDIDATE'S ANSWER:\n"${answerText}"\n\n`;
  
  let criteria = `Evaluate this MMI answer on the following dimensions (score 0–10 each):
1. clarity — Is the answer clear, logical, and easy to follow?
2. structure — Is it well-organised with a clear beginning, middle, and end?
3. empathy — Does it show compassion, awareness of others' perspectives, and emotional intelligence?
4. reasoning — Is the thinking process sound, ethical, and analytically rigorous?`;

  let jsonFormat = `{
  "clarity": <number 0-10>,
  "structure": <number 0-10>,
  "empathy": <number 0-10>,
  "reasoning": <number 0-10>,
  "totalScore": <average of four scores, 1 decimal>,
  "feedback": "<2-3 sentences of specific, actionable feedback>",
  "strengths": "<one key strength>",
  "improvement": "<one specific area to improve>"
}`;

  if (mode === "uk") {
    criteria += `\n5. nhsRelevance — Does the answer show appropriate understanding of NHS contexts, values, and practices?`;
    jsonFormat = `{
  "clarity": <number 0-10>,
  "structure": <number 0-10>,
  "empathy": <number 0-10>,
  "reasoning": <number 0-10>,
  "nhsRelevance": <number 0-10>,
  "totalScore": <average of all five scores, 1 decimal>,
  "feedback": "<2-3 sentences of specific, actionable feedback>",
  "strengths": "<one key strength>",
  "improvement": "<one specific area to improve>"
}`;
  }

  prompt += criteria + `\n\nRespond ONLY with valid JSON in exactly this format (no markdown, no extra text):\n${jsonFormat}`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3,
    max_tokens: 500,
  });

  const raw = response.choices[0].message.content.trim();
  const clean = raw.replace(/```json|```/g, "").trim();
  return JSON.parse(clean);
}

// Keep the dummy functions commented out for generateInterruption, generateQuestionVariant, generateOverallFeedback
// as requested: "Do NOT activate interruption generation or question generation yet."

// /**
//  * Generate an AI interruption during the interview
//  * ...
//  */
// async function generateInterruption(partialAnswer, mode, interruptionStyle) { ... }

// /**
//  * Generate an AI-powered question variation
//  * ...
//  */
// async function generateQuestionVariant(baseQuestion, mode) { ... }

/**
 * Generate overall session feedback
 * @param {Array} answers - Array of evaluated answers
 * @param {string} mode
 * @returns {Object} Overall feedback
 */
async function generateOverallFeedback(answers, mode) {
  // Dummy response until activated
  return {
    overallFeedback: "Overall, you did well but have areas to improve.",
    topStrength: "Empathy",
    priorityImprovement: "Structure",
    readinessLevel: "Developing",
    recommendedPractice: "Practice structuring your thoughts"
  };
}

module.exports = {
  evaluateAnswer,
  generateOverallFeedback,
};