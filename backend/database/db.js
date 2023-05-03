const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://chafo:transan123@transan.nipu8gs.mongodb.net/?retryWrites=true&w=majority"
    );
    /*     await mongoose.connect("mongodb://127.0.0.1:27017");
     */
    console.log("MongoDB database connected...");
  } catch (err) {
    console.log("Error connecting to DB: " + err);
    process.exit(1);
  }
};

module.exports = connectDB;
