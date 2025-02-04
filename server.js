const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const app = express();
app.use(cors());

app.get("/proxy", async (req, res) => {
  try {
    const response = await axios.get("https://serpapi.com/search", {
      params: { ...req.query, api_key: process.env.SERPAPI_KEY },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("Proxy running on port 3000"));
