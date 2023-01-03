// console.log('May Node be with you')

import express from "express";
import cors from "cors";
import config from "./config/index.mjs";
import db from "./config/db.mjs";
import userRouter from "./api/user.mjs";

const express = require('express');
const app = express();



app.use(cors({ origin: true }));
app.use(express.json());
app.use("/api/user", userRouter);


app.listen(3000, function() {
  console.log('listening on 3000')
})