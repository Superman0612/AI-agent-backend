// backend/scripts/seed.js — Populate test data in MongoDB
require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const User = require("../models/User");
const Session = require("../models/Session");

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/eduquest");
  console.log("✅ Connected to MongoDB");

  // Clear existing
  await User.deleteMany({});
  await Session.deleteMany({});
  console.log("🧹 Cleared existing data");

  // Create sample users
  const users = await User.insertMany([
    { name: "Alice Chen", email: "alice@medschool.edu", mode: "canada" },
    { name: "James Patel", email: "james@nhs.uk", mode: "uk" },
    { name: "Sophie Williams", email: "sophie@unimelb.edu.au", mode: "australia" },
    { name: "Wei Lin", email: "wei@nus.edu.sg", mode: "asia" },
  ]);
  console.log(`👤 Created ${users.length} sample users`);

  // Create a sample completed session with evaluations
  const sampleSession = await Session.create({
    userId: users[0]._id,
    mode: "canada",
    status: "completed",
    completedAt: new Date(),
    overallScore: 7.8,
    overallFeedback: "Strong ethical reasoning demonstrated across all scenarios. Continue developing structured frameworks.",
    answers: [
      {
        questionId: "ca_001",
        questionText: "A close friend confides that they have been falsifying their medical school application...",
        answerText: "This is an extremely difficult situation that requires balancing my loyalty to my friend with my obligation to the integrity of the medical profession. I would first have a private and honest conversation with my friend, explaining the serious ethical and legal implications of their actions...",
        timeSpent: 240,
        evaluation: {
          clarity: 8,
          structure: 7,
          empathy: 9,
          reasoning: 8,
          totalScore: 8.0,
          feedback: "Strong demonstration of empathy while maintaining ethical standards. The answer shows good awareness of competing duties. Consider referencing specific professional codes of conduct.",
          strengths: "Excellent balance of personal loyalty and professional ethics",
          improvement: "Structure the response using an explicit ethical framework",
        },
      },
    ],
  });

  console.log(`📋 Created sample completed session: ${sampleSession._id}`);
  console.log("\n✅ Seed complete. Sample session ID:", sampleSession._id.toString());

  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
