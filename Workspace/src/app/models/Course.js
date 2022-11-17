const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  title: { type: String, maxLength: 255 },
  body: { type: String, maxLength: 600 },
  img: { type: String, maxLength: 255 },
  slug: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);