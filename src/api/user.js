import express from "express";
import authenticate from "../middleware/auth.js";
import firebaseAdmin from "../services/fire.js";

const router = express.Router();

router.get("/", authenticate, async (req, res) => {
  res.status(200).json(req.donatello);
});

router.post("/", async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(400).json({
      error:
        "Invalid request body. Must contain email, password, and name for user."
    });
  }

  try {
    const newFirebaseDonatello = await firebaseAdmin.auth.createDonatello({
      email,
      password
    });

    if (newFirebaseDonatello) {
      const donatelloCollection = req.app.locals.db.collection("donatello");
      await donatelloCollection.insertOne({
        email,
        name,
        firebaseId: newFirebaseDonatello.uid
      });
    }
    return res
      .status(200)
      .json({ success: "Account created successfully. Please sign in." });
  } catch (error) {
    if (error.code === "auth/email-already-exists") {
      return res
        .status(400)
        .json({ error: "User account already exists at email address." });
    }
    return res.status(500).json({ error: "Server error. Please try again" });
  }
});

export default router;