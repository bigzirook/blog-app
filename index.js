const express = require("express");
require("dotenv").config();
const connectWithDB = require("./config/database");
const blog = require("./routes/blog");

const app = express();
connectWithDB();
app.use(express.json());
const PORT = process.env.PORT || 4000;

app.use("/api/v1", blog);

app.listen(PORT, () => {
  console.log(`Server is listen on ${PORT}`);
});
