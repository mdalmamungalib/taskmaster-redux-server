const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userPost = require("./src/routes/userPost.route");
app.use("/userPost", userPost);

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port}`);
});
