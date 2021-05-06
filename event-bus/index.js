const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { post } = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/events", (req, res) => {
  const event = req.body;

  post("http://localhost:4000", event);
  post("http://localhost:4001", event);
  post("http://localhost:4002", event);

  res.send({ status: "ok" });
});

app.listen(4005, () => {
  console.log(`listening on 4005`);
});
