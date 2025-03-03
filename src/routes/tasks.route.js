import express from "express";

const router = express.Router();

export default function tasksRoute(client) {
  const taskCollection = client
    .db("taskmaster")
    .collection("tasks");

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
  router.get("/tasks", async (req, res) => {
    try {
      const tasks = await taskCollection.find({}).toArray();
      if (tasks.length === 0) {
        res.status(404).send("No tasks found");
      }else {
        res.status(200).json(tasks);
      }
    } catch (error) {
      console.error("Error getting tasks:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  return router;
}
