import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("Backend");
});

app.listen(3003, () => {
  console.log("Backend is up at 3003");
});
