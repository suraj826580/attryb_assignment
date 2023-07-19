const mongoose = require("mongoose");

const oemSchema = mongoose.Schema(
  {
    modelName: { type: String, require: true },
    year: { type: Number, require: true },
    listPrice: { type: Number, require: true },
    availableColors: { type: [String], require: true },
    milage: { type: Number, require: true },
    power: { type: Number, require: true },
    maxSpeed: { type: Number, require: true },
  },
  {
    versionKey: false,
  }
);

const oemModal = mongoose.model("oemSpecs", oemSchema);

module.exports = { oemModal };
