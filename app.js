const express = require('express');
const dotenv = require('dotenv');
const weatherRoutes = require('./routes/weather'); // Ensure this path is correct

dotenv.config();

const app = express();
const port = 8000;

app.use(express.json());
app.use('/api/weather', weatherRoutes); // Mount the weather routes
app.get('/test', (req, res) => {
    res.status(200).json({ message: 'Test route works!' });
  });
app.listen(port, () => {
  console.log('App is running on port', port);
});