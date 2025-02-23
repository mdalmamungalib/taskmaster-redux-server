import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import user from './src/routes/user.route.js';  // Don't forget the ".js" extension when using import

// Initialize environment variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/user', user);

app.get('/', (req, res) => {
  res.send(`🚀 Server is running on port: ${port}`);
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port}`);
});
