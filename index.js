
const express = require("express");
// instantiate express
const app = express();
app.set("port", process.env.PORT || 8000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/api/user");
});

// const taskController = require("./controllers/userController");
// app.use("/api/user/", userController);
//const userController = require("../controller/userController");
// app.use("/api/user", userController);


app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
module.exports = app;