const mongoose = require("mongoose");

const ReportPriceSchema = mongoose.Schema(
  {
    order: { type: Number, required: true },
    name: { type: Object },
    icon: { type: String, required: true },
    requireDescription: { type: Boolean, required: true },
    subcategories: [
      {
        name: { type: Object },
      },
    ],
    date_created: { type: Date, default: Date.now() },
  },
  { collection: "reportPrices" }
);

module.exports = mongoose.model("reportPrice", ReportPriceSchema);
