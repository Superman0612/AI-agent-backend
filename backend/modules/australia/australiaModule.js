// backend/modules/australia/australiaModule.js
// Australia MMI Mode — Roleplay & Empathy Engine

const AUSTRALIA_CONFIG = {
  readingTime: 60,
  responseTime: 360,
  warningTime: 60,
  interruptionDelay: 90, // interrupt early — patient reactions are dynamic
  personaReactions: {
    angry_patient: [
      "That's not good enough! I've been waiting for months and you're telling me THIS?",
      "You're just saying what you're supposed to say. You don't actually care.",
      "I want to speak to someone senior. You clearly can't help me.",
    ],
    anxious_patient: [
      "But what if the tests are wrong? I read online that this can still be serious.",
      "I can't stop worrying. My child isn't eating properly. Something must be wrong.",
      "Can we just do one more test? Just to be sure? Please?",
    ],
    grieving_family: [
      "She raised three children. She deserves to fight. Don't give up on her.",
      "You're asking me to just... let her go? How can you ask that of me?",
      "What kind of doctor gives up on a patient? Try something else!",
    ],
    defensive_patient: [
      "I've been managing my own health for years. I know what works for me.",
      "I don't need more appointments. I just couldn't make it last time.",
      "My family uses traditional medicine. I'm not going to stop that.",
    ],
    confused_elderly: [
      "I'm sorry, could you say that again? I don't understand what the tablet is for.",
      "My daughter usually handles this. Can I call her?",
      "So do I take this one before or after breakfast? I keep forgetting.",
    ],
  },
};

/**
 * Get a persona reaction for Australian roleplay
 * @param {string} persona
 * @returns {string}
 */
function getPersonaReaction(persona) {
  const reactions = AUSTRALIA_CONFIG.personaReactions[persona] || AUSTRALIA_CONFIG.personaReactions.angry_patient;
  return reactions[Math.floor(Math.random() * reactions.length)];
}

module.exports = { AUSTRALIA_CONFIG, getPersonaReaction };
