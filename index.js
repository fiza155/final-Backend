// const dotenv = require("dotenv").config({ path: "./config/.env" });
const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const cors = require("cors");

const app = require("./app");
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://shaikhfiza3229:dbfiza098@cluster0.ce6tmwm.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch(() => {
    console.log("error");
  });

//Route
const poetry = require("./routes/PoetryRoute");
app.use("/api/v1", poetry);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log("server connected "));
