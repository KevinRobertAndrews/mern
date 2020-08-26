const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdeaSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Idea = mongoose.model("idea", IdeaSchema);
