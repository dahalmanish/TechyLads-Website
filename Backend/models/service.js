const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image_url: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
