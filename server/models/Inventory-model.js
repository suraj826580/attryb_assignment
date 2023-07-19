const { default: mongoose } = require("mongoose");

const inventorySchema = mongoose.Schema(
  {
    image: { type: String, require: true },
    title: { type: String, require: true },
    kmInOdometer: { type: Number, require: true },
    accidentsReports: { type: Number, require: true },
    previousBuyers: { type: Number, require: true },
    registrationPlace: { type: String, require: true },
    originalPaint: { type: Boolean, require: true },
    majorScratches: { type: Boolean, require: true },
    price: { type: Number, require: true },
    description: { type: String, require: true },
    oem_specification_id: { type: String, require: true },
    dealerID: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

const inventoryModel = mongoose.model("inventory", inventorySchema);

module.exports = { inventoryModel };
