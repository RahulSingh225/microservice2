const express = require("express");
const app = express();

const PORT = process.env.PORT || 5002;

app.get("/service2", (req, res) => {
  res.send("Connected to service 2");
});

app.listen(PORT, () => {
  console.log(`Service 2 Running on ${PORT}`);
});
