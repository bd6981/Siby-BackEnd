const express = require("express");
const router = express.Router();
const User = require("./user");

router.get("/", async (req, res, next) => {
  try {
    const user = await User.find({});
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const userToUpdate = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (userToUpdate) {
      res.json(userToUpdate);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const userToDelete = await User.findByIdAndDelete(req.params.id);
    console.log(userToDelete);
    if (userToDelete) {
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(err);
  }
});

module.exports = router;
