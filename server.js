"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/", (req, res, next) => {
  res.status(200).send("Default route working.")
});

app.get("*", (req, res, next) =>
  res.status(404).send(`Resource not found :'(`)
);
app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));