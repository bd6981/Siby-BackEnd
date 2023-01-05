const express = require("express");

const router = express.Router();

const User = require("../model/user");


router.get("/", async (req, res, next) => {
  try {
    const allTasks = await Task.find({});
    res.json(allTasks);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const selectTask = await Task.findOne({ _id: req.params.id });
    res.json(selectTask);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const day = await User.findOne({  });
    const createTask = await Task.create({
     
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(createTask);
  } catch (err) {
    next(err);
  }
});



module.exports = router;
