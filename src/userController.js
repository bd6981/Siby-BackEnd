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

// Create: POST a Bookmark
router.post("/", async (req, res, next) => {
  try {
    // 1. Use the data in the req body to create a new bookmark
    const newUser = await User.create(req.body);
    // 2. If the create is successful, send back the record that was inserted, specifying 201 status for Created
    res.status(201).json(newUser);
  } catch (err) {
    // 3. If there was an error, pass it on!
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const userToUpdate = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // If a bookmark was found and operation successful
    if (userToUpdate) {
      // send back updated bookmark
      res.json(userToUpdate);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(err);
  }
});
// Delete: DELETE a Bookmark
router.delete("/:id", async (req, res, next) => {
  try {
    const userToDelete = await User.findByIdAndDelete(req.params.id);
    console.log(userToDelete);
    // If a bookmark was found and operation successful
    if (userToDelete) {
      // send back 204 No Content
      res.sendStatus(204);
    } else {
      // else send back 404 Not Found
      res.sendStatus(404);
    }
  } catch (error) {
    next(err);
  }
});

// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;
