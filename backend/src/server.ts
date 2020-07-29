import express from "express";

const app = express();

app.get("/users", (req, res) => {
  return res.json({ hello: "dev" });
});

app.listen(3333);
