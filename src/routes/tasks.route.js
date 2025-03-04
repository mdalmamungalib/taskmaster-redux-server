import express from "express";

const router = express.Router();

export default function tasksRoute(client) {
  const taskCollection = client
    .db("taskmaster")
    .collection("tasks");

  // Sample GET Route
  router.get("/tasks", async (req, res) => {
    try {
      const tasks = await taskCollection.find({}).toArray();
      if (!tasks.length) {
        res.status(404).json({ message: "No tasks found" });
      } else {
        res.status(200).json(tasks);
      }
    } catch (error) {
      console.error("Error getting tasks:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  return router;
}
