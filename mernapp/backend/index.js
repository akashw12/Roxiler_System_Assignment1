const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000; 
const mongoUrl = process.env.MONGODB_URL;
// console.log(mongoUrl);
app.use(cors());

// Connecting to MongoDB Database
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log(`Connected to mongodb`);
  })
  .catch((err) => {
    console.log(err);
  });

// Defining the API routes
app.get("/", (req, res) => {
  res.send("Hello Roxiler Systems!");
});

const transactionRoutes = require("./routes/transactionRoutes");
app.use("/", transactionRoutes);

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
