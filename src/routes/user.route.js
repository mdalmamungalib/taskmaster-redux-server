import express from 'express';
const router = express.Router();

// Sample POST Route
router.post('/', (req, res) => {
  res.json({
    message: 'POST request received successfully',
  });
});

// Sample GET Route
router.get('/getUser', (req, res) => {
  res.json({
    message: 'GET request received successfully',
  });
});

export default router;
