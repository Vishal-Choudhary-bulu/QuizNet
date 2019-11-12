const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const quizSchema = new Schema(
  {
    id: { type: String, required: true },
    ques: { type: String, required: true },
    option1: { type: String, required: true },
    option2: { type: String, required: true },
    option3: { type: String, required: false },
    option4: { type: String, required: false },
    correct: { type: String, required: true },
    author: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
