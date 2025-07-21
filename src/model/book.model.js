const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String },
    publishedYear: { type: Number },
    genre: { type: String },
    inStock: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);
module.exports = mongoose.model("books", bookSchema);
