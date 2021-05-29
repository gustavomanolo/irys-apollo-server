const mongoose = require("mongoose");

const ReportPriceSchema = mongoose.Schema(
  {
    deviceId: { type: String, trim: true, required: true },
    categoryId: { type: String, required: true },
    subcategoryId: { type: String, required: true },
    description: { type: String, trim: true, default: '' },
    location: {
      type: { type: String },
      coordinates: [],
    },
    date_created: { type: Date, default: Date.now() },
  },
  { collection: "reportPrices" }
);

// Create index for location
ReportPriceSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("reportPrice", ReportPriceSchema);
