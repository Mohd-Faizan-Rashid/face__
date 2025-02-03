const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/serpapi', async (req, res) => {
  try {
    const { query } = req.body;
    const response = await axios.get(`https://serpapi.com/search?q=${query}&api_key=YOUR_API_KEY`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Proxy running on port 3000'));
