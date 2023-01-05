
	const mongoose = require("../db/connections.js");
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    
    email: String,
    password: String,
   
  });

  const User = mongoose.model("user", userSchema);
  module.exports = User;
