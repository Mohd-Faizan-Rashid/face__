const express = require("express");
const axios = require("axios");
const cors = require("cors");

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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
