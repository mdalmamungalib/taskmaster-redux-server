import express from "express";

const router = express.Router();

export default function userRoutes(client) {
  const userCollection = client.db("Taskmaster").collection("users");

  // Create User Route
  router.post("/createUser", async (req, res) => {
    try {
      const user = req.body.user;
      const query = { email: user.email };
      const existingUser = await userCollection.findOne(query);

      if (existingUser) {
        res.status(409).send("User already exists");
      } else {
        await userCollection.insertOne(user);
        res.status(201).send("User created successfully");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  // Sample GET Route
  router.get("/getUser", (req, res) => {
    res.json({
      message: "GET request received successfully",
    });
  });

  return router;
}
