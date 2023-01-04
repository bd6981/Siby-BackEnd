import express from "express";
import cors from "cors";
import config from "./config/index.js";
import db from "./config/db.js";
import userRouter from "./api/user.js";

const express = require('express');
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/api/user", userRouter);


app.listen(3000, function() {
  console.log('listening on 3000')
})