const express = require("express");
const router = express.Router();

// Sample POST Route
router.post("/", (req, res) => {
  res.json({
    message: "POST request received successfully",
  });
});

// Sample GET Route
router.get("/", (req, res) => {
  res.json({
    message: "GET request received successfully",
  });
});

module.exports = router;
