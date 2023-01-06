const express = require("express");

const app = express();
app.set("port", process.env.PORT || 8000);

const cors = require("cors");
app.use(cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.redirect("/api/user");
});

const userController = require("./src/userController");
app.use("/api/user", userController);


app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

module.exports = app;