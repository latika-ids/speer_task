const mongoose = require("mongoose");
const { DB_URI } = require("../app-config");

(async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("DB Connected!");
  } catch (error) {
    console.error("Couldn't connect to the database:", error.message);
    throw error;
  }
})();
