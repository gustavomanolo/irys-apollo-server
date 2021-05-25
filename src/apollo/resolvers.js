// Import Mongoose models
const Category = require("../db/models/Category");
const ReportPrice = require("../db/models/ReportPrice");

// Resolvers
const resolvers = {
  Query: {
    getCategories: async () => {
      try {
        const categories = await Category.find({}).sort({ order: -1 });
        return categories;
      } catch (errDB) {
        console.log("Error: al obtener productos: ", errDB);
      }
    },
  },
};

module.exports = resolvers;
