import express from "express";
import cors from "cors";
import dotenv from "dotenv"; 
import { MongoClient, ServerApiVersion } from "mongodb";
import userRoutes from "./src/routes/user.route.js";
import tasksRoute from "./src/routes/tasks.route.js";

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes


const uri = `mongodb+srv://taskmaster:${process.env.MONGO_DB_PASSWORD}@cluster0.goima.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("✅ Connected to MongoDB");


    app.use("/user", userRoutes(client));
    app.use("/task", tasksRoute(client));


    app.get("/", (req, res) => {
      res.send(`🚀 Server is running on port: ${port}`);
    });
    
    // Start the server
    app.listen(port, () => {
      console.log(`🚀 Server is running on port: ${port}`);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


