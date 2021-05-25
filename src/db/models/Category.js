const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
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
  { collection: "categories" }
);

module.exports = mongoose.model("category", CategorySchema);
