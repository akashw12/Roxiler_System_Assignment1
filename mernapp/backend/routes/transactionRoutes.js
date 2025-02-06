 
const express = require("express");
const router = express.Router();

// Example route
router.get("/transactions", (req, res) => {
  res.send("Transaction data");
});

module.exports = router;
