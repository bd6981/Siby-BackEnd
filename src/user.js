
	const mongoose = require("./connections.js");
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
   
   
    email: String,
    password: String,
    name: String,
   
  });

  const User = mongoose.model("User", userSchema);
  module.exports = User;
