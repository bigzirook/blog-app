const mongoose = require("mongoose");
const connectWithDB = async () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("DB connected successfully."))
    .catch((e) => {
      console.log("Failed to connect DB");
      console.error(err);
      process.exit(1);
    });
};

module.exports = connectWithDB;
