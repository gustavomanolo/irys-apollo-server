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
        console.log("Error: getting product categories: ", errDB);
      }
    },
    getReports: async (_, { deviceId }) => {
      try {
        // Check if cient exist
        const userReports = await ReportPrice.find({
          deviceId: deviceId
        })

        return userReports
      } catch (errDB) {
        console.log("Error: getting user reports: ", errDB);
      }
    },
  },
  Mutation: {
    addPriceReport: async (_, { input }) => {
      try {
        const newReport = new ReportPrice({
          ...input,
          location: {
            type: "Point",
            coordinates: [parseFloat(input.locationLng), parseFloat(input.locationLat)],
          },
        });

        // Save in DB
        newReport.save(function (err, newDoc) {
          if (err) {
            console.log("Error: saving price report", err);
            throw new Error(err.message);
          } else {
            // All ok
            return newDoc._id;
          }
        });
      } catch (errDB) {
        console.log("Error: adding price report: ", errDB);
        return 'Error: adding new document'
      }
    },
  },
};

module.exports = resolvers;
