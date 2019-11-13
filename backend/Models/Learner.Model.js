const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const learnerSchema = new Schema(
  {
    learner_id: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    solved: { type: Array, required: true },
    posted: { type: Array, required: true },
    learnerLevel: { type: String, required: true }
  },
  {
    timestamps: false
  }
);

const Learner = mongoose.model("Learner", learnerSchema);

module.exports = Learner;
