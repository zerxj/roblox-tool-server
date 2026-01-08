const express = require("express");
const app = express();

let state = { fly: false };

app.use(express.json());

app.post("/state", (req, res) => {
  state = req.body;
  res.json({ ok: true });
});

app.get("/state", (req, res) => {
  res.json(state);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
