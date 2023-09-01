"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { queryAi } = require("./routes/aiHandler");
const { getTasks, createOrUpdateTask, deleteTask } = require("./routes/taskHandler");

const verifyUser = require("./middleware/Authorize");

const app = express();
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",")
    : [],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

const PORT = process.env.PORT || 3001;

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_CONNECT);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongoose connection error!"));
db.once("open", () => console.log("Mongoose connected!"));

app.use(verifyUser);

app.get("/", (req, res, next) => {
  res.status(200).send("Default route working.");
});

app.post("/query", queryAi);

app.get("/task", getTasks);
app.post("/task", createOrUpdateTask);
app.patch("/task", createOrUpdateTask);
app.delete("/task", deleteTask);

app.get("*", (req, res, next) =>
  res.status(404).send(`Resource not found :'(`)
);

app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
