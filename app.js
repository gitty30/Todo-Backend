require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const dbconnect = require("./connect/connect");
const data = require("./Routers/routes");
const port = process.env.PORT;

dbconnect(process.env.MONGO_URI);
const database = mongoose.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", data);



database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Datbase is connected");
});

app.listen(port, (error) => {
  try {
    console.log(`Server started on port no.${port}`);
  } catch (error) {
    console.log(error);
  }
});
