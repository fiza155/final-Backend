const mongoose = require("mongoose");

const PoetrySchema = new mongoose.Schema({
  poet: {
    type: String,
    required: [true, "Poet name"],
  },
  data: {
    type: String,
    required: [true, " Poet data "],
  },
});
module.exports = mongoose.model("Poetry", PoetrySchema);
