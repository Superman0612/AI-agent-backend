// config/modeConfig.js — Mode Behavior Configuration
const MODE_CONFIG = {
  canada: {
    name: "Canada Mode",
    description: "Deep thinking ethical scenarios with unpredictable follow-ups",
    flag: "🇨🇦",
    readingTime: 120, // 2 minutes in seconds
    responseTime: 360, // 6 minutes
    warningTime: 60, // last 60 seconds warning
    interruptionEnabled: true,
    interruptionStyle: "deep_reasoning",
    interruptionDelay: 180, // interrupt after 3 min
    focusAreas: ["ethical reasoning", "critical thinking", "unpredictable scenarios"],
    aiPersona: "A thoughtful senior interviewer at a Canadian medical school who probes deeply into ethical reasoning",
    questionStyle: "deep_ethical",
    followUpEnabled: true,
    color: "#DC143C",
    accent: "#FFD700",
  },
  uk: {
    name: "UK Mode",
    description: "Fast-paced structured interviews with AI clarification prompts",
    flag: "🇬🇧",
    readingTime: 45, // 45 seconds
    responseTime: 300, // 5 minutes
    warningTime: 60,
    interruptionEnabled: true,
    interruptionStyle: "clarification",
    interruptionDelay: 120, // interrupt after 2 min
    interruptionPhrases: [
      "Can you clarify that point?",
      "Be more specific, please.",
      "Could you elaborate on that?",
      "What exactly do you mean by that?",
      "Can you give a concrete example?",
    ],
    focusAreas: ["clarity", "structure", "NHS context", "professionalism"],
    aiPersona: "A structured NHS consultant interviewer who values clarity and directness",
    questionStyle: "nhs_structured",
    followUpEnabled: true,
    color: "#003087",
    accent: "#CF142B",
  },
  australia: {
    name: "Australia Mode",
    description: "Roleplay simulation with emotionally challenging patient scenarios",
    flag: "🇦🇺",
    readingTime: 60,
    responseTime: 360,
    warningTime: 60,
    interruptionEnabled: true,
    interruptionStyle: "emotional_roleplay",
    interruptionDelay: 90,
    roleplayPersonas: ["angry_patient", "anxious_patient", "grieving_family", "confused_elderly"],
    focusAreas: ["empathy", "emotional intelligence", "communication", "roleplay"],
    aiPersona: "A roleplay patient who challenges your empathy and communication skills",
    questionStyle: "roleplay_scenario",
    followUpEnabled: true,
    color: "#00843D",
    accent: "#FFCD00",
  },
  asia: {
    name: "Asia (Singapore) Mode",
    description: "Academic and ethics-based structured interview format",
    flag: "🇸🇬",
    readingTime: 60,
    responseTime: 300,
    warningTime: 60,
    interruptionEnabled: false,
    interruptionStyle: "none",
    focusAreas: ["academic knowledge", "ethics", "structured answers", "professionalism"],
    aiPersona: "A formal Singapore medical school interviewer focused on academic excellence and ethical frameworks",
    questionStyle: "academic_ethics",
    followUpEnabled: false,
    color: "#EF3340",
    accent: "#FFFFFF",
  },
};

module.exports = MODE_CONFIG;
