const mongoose = require("mongoose");
require('dotenv').config()

const connectDB = async () => {
  console.log('-> pasa')
  try {
    // console.log("-> process env: ", process.env.DB_MONGO);
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    });
  } catch (err) {
    console.log("Error: connectiong to DB", err);
    process.exit(1);
  }
};

module.exports = connectDB;
