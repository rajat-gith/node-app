require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Welcome to AWS World");
});

app.get("/users", async (req, res) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      res.json(response.data);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
