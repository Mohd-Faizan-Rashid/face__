const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/serpapi", async (req, res) => {
    try {
        const response = await axios.get("https://serpapi.com/search", {
            params: req.query,
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log("Proxy server running on port 3000"));
