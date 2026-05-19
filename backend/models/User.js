// models/User.js — User Schema
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    mode: {
      type: String,
      required: true,
      enum: ["canada", "uk", "australia", "asia"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
